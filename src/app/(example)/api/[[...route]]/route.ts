import { todoSchema } from '@/types/todo'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

// APIルートの実装
const app = new Hono().basePath('/api')

// Todosエンドポイント
app.get('/todos', async (c) => {
  // ここでは仮のデータを返します
  // 実際の実装では、データベースからデータを取得します
  return c.json({
    success: true,
    data: [
      {
        id: '1',
        title: 'Learn Hono',
        description: 'Learn how to use Hono with Next.js',
        completed: false,
        priority: 'high'
      }
    ]
  })
})

app.post('/todos', zValidator('json', todoSchema), async (c) => {
  const todo = c.req.valid('json')
  // ここでは仮のデータを返します
  // 実際の実装では、データベースにデータを保存します
  return c.json({
    success: true,
    data: {
      id: Math.random().toString(36).substring(7),
      ...todo
    }
  })
})

app.put('/todos/:id', zValidator('json', todoSchema), async (c) => {
  const id = c.req.param('id')
  const todo = c.req.valid('json')
  // ここでは仮のデータを返します
  // 実際の実装では、データベースのデータを更新します
  return c.json({
    success: true,
    data: {
      id,
      ...todo
    }
  })
})

app.patch('/todos/:id/toggle', async (c) => {
  const id = c.req.param('id')
  // ここでは仮のデータを返します
  // 実際の実装では、データベースのデータを更新します
  return c.json({
    success: true,
    data: {
      id,
      title: 'Learn Hono',
      description: 'Learn how to use Hono with Next.js',
      completed: true,
      priority: 'high'
    }
  })
})

app.delete('/todos/:id', async (c) => {
  // ここでは仮のデータを返します
  // 実際の実装では、データベースからデータを削除します
  return c.json({
    success: true
  })
})

export type AppType = typeof app

// App Routerでは、GETとPOSTのハンドラーを別々に定義する必要があります
export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
