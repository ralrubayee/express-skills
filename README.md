# Set upstream

Set up synchronization with the upstream repo with:

```sh
git init
git remote add upstream https://github.com/SEI-Remote/express-todos.git
```

You can now synchronize your local repo with the most recent push to the upstream at any time with these commands:

```sh
git fetch --all
git reset --hard upstream/main
```
