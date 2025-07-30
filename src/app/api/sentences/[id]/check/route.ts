import { detectGrammarRuleViolations } from '@/lib/ruleEngine'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params
  const body = await req.json()
  const userAnswer = (body?.userAnswer ?? '').trim()

  if (!userAnswer) {
    return NextResponse.json({ error: 'Missing userAnswer' }, { status: 400 })
  }

  return NextResponse.json({
    isCorrect: false,
    violations: await detectGrammarRuleViolations('Hello world!', userAnswer),
  })
}
