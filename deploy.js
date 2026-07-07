import ghpages from "gh-pages";

ghpages.publish(
    "dist",
    {
        dotfiles: true,
        nojekyll: true,
    },
    (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log("Published!");
    }
);