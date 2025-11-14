import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import express from 'express'

const app = express()




app.listen(8000 , () => {
    console.log(`server running at http://localhost:8000/mcp`)
})