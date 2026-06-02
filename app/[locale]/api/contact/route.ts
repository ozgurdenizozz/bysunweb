import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await req.formData();

    // Form verilerini topla
    const company = formData.get('company') as string;
    const contact_person = formData.get('contact_person') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const location = formData.get('location') as string;
    const area = formData.get('area') as string;
    const consumption = formData.get('consumption') as string;
    const invoiceFile = formData.get('invoice') as File | null;

    // Validasyon
    if (!company || !contact_person || !phone || !email || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email içeriği
    const emailHtml = `
      <h2>Yeni Ön Fizibilite Talebi</h2>

      <h3>Firma / Yetkili Bilgileri</h3>
      <p><strong>Şirket Adı:</strong> ${company}</p>
      <p><strong>Yetkili Kişi:</strong> ${contact_person}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>E-posta:</strong> ${email}</p>

      <h3>Tesis / Tüketim Bilgileri</h3>
      <p><strong>Tesis Lokasyonu:</strong> ${location}</p>
      <p><strong>Çatı/Otopark m²:</strong> ${area || 'Belirtilmedi'}</p>
      <p><strong>Aylık/Yıllık Tüketim:</strong> ${consumption || 'Belirtilmedi'}</p>

      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        Bu talep bysunweb.vercel.app üzerinden gönderilmiştir.
      </p>
    `;

    // Dosya işle (varsa)
    const attachments = [];
    if (invoiceFile) {
      const buffer = Buffer.from(await invoiceFile.arrayBuffer());
      attachments.push({
        filename: invoiceFile.name,
        content: buffer,
      });
    }

    // Email gönder
    const result = await resend.emails.send({
      from: 'noreply@bysunsolar.com',
      to: 'info@bysunsolar.com',
      replyTo: email,
      subject: `Yeni Ön Fizibilite Talebi - ${company}`,
      html: emailHtml,
      ...(attachments.length > 0 && { attachments }),
    });

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
