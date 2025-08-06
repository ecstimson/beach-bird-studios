import { NextRequest, NextResponse } from 'next/server';
import DataForSEOClient from '@/lib/dataforseo';

export async function POST(request: NextRequest) {
  try {
    const { keyword, location, type, url, industry, competitors } = await request.json();

    const client = new DataForSEOClient({
      login: process.env.DATAFORSEO_LOGIN || '',
      password: process.env.DATAFORSEO_PASSWORD || ''
    });

    if (type === 'website-analysis') {
      if (!url) {
        return NextResponse.json({ error: 'URL is required for website analysis' }, { status: 400 });
      }
      const analysis = await client.analyzeWebsite(url);
      return NextResponse.json({ analysis });
    } else if (type === 'keywords') {
      if (!keyword) {
        return NextResponse.json({ error: 'Keyword is required' }, { status: 400 });
      }
      const keywords = await client.getKeywordData([keyword], location);
      return NextResponse.json({ keywords });
    } else if (type === 'serp') {
      if (!keyword) {
        return NextResponse.json({ error: 'Keyword is required' }, { status: 400 });
      }
      const serp = await client.getSerpResults(keyword, location);
      return NextResponse.json({ serp });
    } else if (type === 'local-market-research') {
      if (!location || !industry) {
        return NextResponse.json({ error: 'Location and industry are required' }, { status: 400 });
      }
      const localMarket = await client.getLocalMarketResearch(location, industry);
      return NextResponse.json({ localMarket });
    } else if (type === 'keyword-gap-analysis') {
      if (!url || !competitors) {
        return NextResponse.json({ error: 'URL and competitors are required' }, { status: 400 });
      }
      const domain = new URL(url).hostname;
      const keywordGaps = await client.getKeywordGapAnalysis(domain, competitors, []);
      return NextResponse.json({ keywordGaps });
    } else if (type === 'competitor-research') {
      const competitorData = await client.getBeachBirdCompetitorResearch();
      return NextResponse.json({ competitors: competitorData });
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}