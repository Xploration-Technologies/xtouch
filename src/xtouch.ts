import { parseArgs } from 'base/parseArgs';
import { error } from 'base/utils/console';
import { help } from 'base/utils/help';
import { version } from 'base/utils/version';
import { writeFile } from 'base/writeFile';

const args = process.argv.slice(2);
const environment = parseArgs(args);

// TODO: Support writing template data under different `filename`
// TODO: Add subcommand help
// ? Should we add per-template commands to fill in data?

const verbose = environment.verbose;

if (environment.help) {
  help();
} else if (environment.interactive) {
  error('Interactive Mode currently unavailable.');
} else if (environment.version) {
  version();
} else {
  writeFile(environment._, verbose);
}