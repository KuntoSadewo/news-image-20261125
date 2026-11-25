// news-image-20261125 entry point.
//
// The entry image (entry.png, drawn for this competition) sits next to this
// file in the repository. The program copies it, byte for byte, to
// entry.png inside the output directory: $MAKEFUN_OUTPUT_DIR when that
// variable is set, otherwise /output. Running it any number of times
// produces the same bytes, and it never touches the network.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

// Resolve the output directory to an absolute path so the destination is
// unambiguous no matter where the program is invoked from. The directory
// itself is only ever created when missing, never removed or recreated.
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outputDir, { recursive: true });

const target = join(outputDir, "entry.png");
copyFileSync(source, target);
console.log(`wrote ${target} (${statSync(target).size} bytes)`);
