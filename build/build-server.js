const shell = require('shelljs')

shell.echo('##########################')
shell.echo('#     Building react       #')
shell.echo('##########################')

shell.cd('panel')
const PUBLIC = '../spring/src/main/resources/public/'
const STATIC = '../spring/src/main/resources/static/'
const remplates = '../spring/src/main/resources/templates/'
shell.rm('-rf', PUBLIC);
shell.rm('-rf', STATIC);
shell.rm('-rf', remplates);
if (shell.exec('npm run build').code !== 0) {
  shell.echo('Error: react build failed')
  shell.exit(1)
}
shell.cp('-R', 'build/', PUBLIC)
shell.cp('-R', 'build/', STATIC)
shell.cp('-R', 'build/', remplates)
shell.cd('..')

shell.echo('##########################')
shell.echo('#     Building spring    #')
shell.echo('##########################')

shell.cd('spring')
const mvnw = process.platform === 'win32' ? 'mvnw' : 'mvn'
if (shell.exec(mvnw + ' clean package').code !== 0) {
  shell.echo('Error: spring build failed')
  shell.exit(1)
}
