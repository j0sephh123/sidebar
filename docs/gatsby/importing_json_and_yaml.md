What I had issues with was that I tried to use a `json` file with `fs.readFile()`... I totally didn't realize that I could just `import file from './file.json'` and we are good to go. The interesting this here is that we could actually achieve the same for `yaml` files, which I didn't know before.
Actually, even more interesting is that I got the idea for that, while working with _Python_. I have stumbled upon this format also while I was exploring [Netlify-cms](https://www.netlifycms.org/), which is also built in gatsby. It uses `yaml` as configuration files. Sadly, I can't create my end files with them, because it's a similar bit richer format to `json`. It doesn't support `html`.
[YAML syntax](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)
[I started here](https://www.tutorialspoint.com/yaml/yaml_basics.htm)


