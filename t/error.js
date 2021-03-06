import { fork } from 'child_process'

const { stdout, stderr } = fork('.', [], {
  stdio: 'pipe',
  execArgv: [], // for when debugging
}).on('error', (error) => {
  console.log(error)
})

stdout.pipe(process.stdout)
stderr.pipe(process.stderr)