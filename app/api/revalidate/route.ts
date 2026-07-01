import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret');
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    const body = await request.json();
    const slug = body?.slug?.current;

    revalidatePath('/blog');
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
