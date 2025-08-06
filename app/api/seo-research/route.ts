import { NextRequest, NextResponse } from 'next/server';
import DataForSEOClient from '@/lib/dataforseo';

export async function POST(request: NextRequest) {
  try {
    const { keyword, location, type } = await request.json();

    if (!keyword) {
      return NextResponse.json({ error: 'Keyword is required' }, { status: 400 });
    }

    const client = new DataForSEOClient({
      login: process.env.DATAFORSEO_LOGIN || '',
      password: process.env.DATAFORSEO_PASSWORD || ''
    });

    if (type === 'keywords') {
      const keywords = await client.getKeywordData([keyword], location);
      return NextResponse.json({ keywords });
    } else if (type === 'serp') {
      const serp = await client.getSerpResults(keyword, location);
      return NextResponse.json({ serp });
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}