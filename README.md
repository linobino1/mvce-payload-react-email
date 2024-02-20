# MVCE - PayloadCMS vite vs. react-email

this is a minimal viable code example (MVCE) to demonstrate the issue with PayloadCMS on vite and react-email.

## Steps to reproduce

```
yarn
yarn dev

# open http://localhost:3000
# -> it works
```

now uncomment lines 8-13 in `src/collections/Users.tsx` and save the file

```
# open http://localhost:3000
# -> it crashes

# you even need to `rm -rf node_modules` and `yarn` again to get it working again
```
