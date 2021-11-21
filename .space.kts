job("Run npm test") {
    container( displayName= "Run test", image = "node:14-alpine") {
        shellScript {
            interpreter = "/bin/sh"
            content = """
               echo Install pnpm...
               npm i -g pnpm
               echo Install npm dependencies...
               pnpm install
               echo Run tests...
               npm run test
            """
        }
    }
}
