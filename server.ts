import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory enquiry store for demonstration & owner logging
interface EnquiryRecord {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'booked';
}

const recentEnquiries: EnquiryRecord[] = [];

// API Route: Submit Event Enquiry
app.post('/api/enquiry', (req, res) => {
  try {
    const { fullName, phone, email, eventType, eventDate, guestCount, message } = req.body;

    if (!fullName || !fullName.trim()) {
      return res.status(400).json({ success: false, error: 'Full name is required.' });
    }

    if (!phone || !phone.trim() || phone.replace(/\D/g, '').length < 10) {
      return res.status(400).json({ success: false, error: 'A valid 10-digit mobile number is required.' });
    }

    if (!eventType) {
      return res.status(400).json({ success: false, error: 'Please select an event type.' });
    }

    if (!eventDate) {
      return res.status(400).json({ success: false, error: 'Please select your preferred event date.' });
    }

    if (!guestCount) {
      return res.status(400).json({ success: false, error: 'Please specify approximate guest count.' });
    }

    // Generate unique enquiry ID
    const refId = `RG-${Date.now().toString().slice(-6)}`;
    const newEnquiry: EnquiryRecord = {
      id: refId,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email?.trim() || '',
      eventType,
      eventDate,
      guestCount,
      message: message?.trim() || '',
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    recentEnquiries.unshift(newEnquiry);
    if (recentEnquiries.length > 50) recentEnquiries.pop();

    console.log(`[Roshal Garden Event Enquiry Received - ${refId}]`, newEnquiry);

    // Build pre-filled WhatsApp message for owner & client instant handoff
    const waText = encodeURIComponent(
      `Hello Roshal Garden,\n\nI just submitted an event enquiry on your website (Ref: ${refId}):\n` +
      `• Name: ${newEnquiry.fullName}\n` +
      `• Phone: ${newEnquiry.phone}\n` +
      `• Event Type: ${newEnquiry.eventType}\n` +
      `• Target Date: ${newEnquiry.eventDate}\n` +
      `• Estimated Guests: ${newEnquiry.guestCount}\n` +
      (newEnquiry.message ? `• Note: ${newEnquiry.message}\n` : '') +
      `\nPlease let me know date availability and package quotes.`
    );

    const whatsappRedirectUrl = `https://wa.me/919850543449?text=${waText}`;

    return res.status(200).json({
      success: true,
      referenceId: refId,
      message: 'Your enquiry has been received! Our venue manager will call you within 2 hours.',
      whatsappRedirectUrl,
      enquiryDetails: {
        id: refId,
        fullName: newEnquiry.fullName,
        eventType: newEnquiry.eventType,
        eventDate: newEnquiry.eventDate,
        guestCount: newEnquiry.guestCount
      }
    });
  } catch (error) {
    console.error('Error processing event enquiry:', error);
    return res.status(500).json({ success: false, error: 'Internal server error. Please call directly at 9850543449.' });
  }
});

// API Route: Venue basic status check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    venue: 'Roshal Garden (Bhosari, Pune)',
    enquiriesCount: recentEnquiries.length,
    timestamp: new Date().toISOString()
  });
});

async function startServer() {
  if (!isProduction) {
    // Mount Vite middleware in development
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: {
        middlewareMode: true,
        hmr: false
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Roshal Garden server is running on port ${port}`);
  });
}

startServer();
