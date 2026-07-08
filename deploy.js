import ghpages from "gh-pages";
import { execSync } from "child_process";

const commitMessage = execSync('git log -1 --pretty=%B').toString().trim();

ghpages.publish(
    "dist",
    {
        dotfiles: true,
        nojekyll: true,
        message: commitMessage || "Updates",
    },
    (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log("Published with commit message: " + (commitMessage || "Updates"));
    }
);