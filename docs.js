const fs = require('fs');
const fname = process.argv[2];
if (fname == undefined) {
    console.error(`Required argument not found`)
    process.exit();
}
const file = fs.readFileSync(fname,'utf8');

let title = '';
let variables = ['ptr','static.InternalFunctions'];
let static_functions = [];
let instance_methods = [];
let in_function = false;
/** @type {{name: string, params: {name:string,type:string}[]}} */
let constructor = {name: '', params: []};
for (const line of file.split('\n')) {
    // find class definiton first
    //console.log(line);
    if (title == '') {
        if (line.startsWith('export default class')) {
            title = line.replace('export default class','').replace('{','').trim();
            constructor.name = title;
        }
        continue;
    }
    if (in_function) {
        if (line.startsWith('    }') && line.trim().endsWith('}')) {
            in_function = false;
        }
        continue;
    }
    // it's a function!
    if (line.trim().endsWith('{')) {
        in_function = true;
        if (line.trim().startsWith('static ')) {
            
            const matches = line.trim().match(/static ([A-Za-z0-9_]+)\s*\((.*)\)/);
            const name = matches[1];
            const params = parse_arguments(matches[2]);
            if (name) {
                static_functions.push({
                    name,
                    params,
                });
            }
        } else {
            const matches = line.trim().match(/([A-Za-z0-9_]+)\s*\((.*)\)/);
            const name = matches[1];
            const params = parse_arguments(matches[2]);
            if (name) {
                if (name == 'constructor') {
                    constructor.params = params;
                } else {
                    instance_methods.push({
                        name,
                        params,
                    });
                }
            }
        }
    }
}

function parse_arguments(params) {
    /** @type {{name:string,type:string}[]} */
    const out = [];
    if (!params) {
        return out;
    }
    const list = params.split(',').map(v=>v.trim());
    for (const item of list) {
        const [name,type] = item.split(':').map(v=>v.trim());
        out.push({
            name,
            type
        });
    }
    return out;
}

//console.log(`Title`);
//console.log(title);
//console.log(`Variables`);
//console.log(variables.join('\n'));
//console.log(`Static Functions`);
//console.log(static_functions.map(v=>`${v.name}: ${v.params.map(v=>`${v.name}: ${v.type}`).join(', ')}`).join('\n'));
//console.log(`Instance Methods`);
//console.log(instance_methods.map(v=>`${v.name}: ${v.params.map(v=>`${v.name}: ${v.type}`).join(', ')}`).join('\n'));


let md = `# ${title}

\`new ${constructor.name}(${constructor.params.map(v=>`${v.name}: ${v.type}`).join(', ')}): ${title}\`;

## Types


## Variables
`;
for (const v of variables) {
    let type = 'type';

    if (v == 'ptr') {
        type = '`string` | `null`';
    }
    if (v == 'static.InternalFunctions') {
        type = '`Object`';
    }
    md += `### ${v}\n\nType: ${type}\n\ndesc\n\n`;
    md += '## Static functions\n\n';
    for (const fn of static_functions) {
        md += `### ${fn.name}()\n\n\`${fn.name}(${fn.params.map(v=>`${v.name}: ${v.type}`)})\`\n\n`;
        md += `Arguments: `;
        if (fn.params.length == 0) {
            // no arguments
            md += 'N/A\n\n';
        } else {
            md += '\n\n';
            md += `| Argument | Type | Description |\n`
            md += `| - | - | - |\n`;
            for (const p of fn.params) {
                md += `| ${p.name} | ${p.type} | Desc |\n`;
            }
            md += '\n\n';
        }
        md += `Returns: returntype\n\n`;
        md += `Wraps \`tmpfn\`\n\n`;
    }
    
    md += '## Methods\n\n';
    for (const fn of instance_methods) {
        md += `### ${fn.name}()\n\n\`${fn.name}(${fn.params.map(v=>`${v.name}: ${v.type}`)})\`\n\n`;
        md += `Arguments: `;
        if (fn.params.length == 0) {
            // no arguments
            md += 'N/A\n\n';
        } else {
            md += '\n\n';
            md += `| Argument | Type | Description |\n`
            md += `| - | - | - |\n`;
            for (const p of fn.params) {
                md += `| ${p.name} | ${p.type} | Desc |\n`;
            }
            md += '\n\n';
        }
        md += `Returns: returntype\n\n`;
        md += `Wraps \`${fn.name}\`\n\n`;
    }
}

console.log(md);