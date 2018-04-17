## Create BackstopJS config file
Creates BackstopJS config file and initializes the default parameters
```
backstop init
```
## Perform visual regression
Takes screenshots of the current domain and performs a visual diff against the baseline images 
```
backstop test
```

## Approving new screenshots
Sometimes running 'backstop test' will throw up false failures because of some expected 
changes that are not actual bugs, the following command will replace the baseline screenshots
with the latest screenshots, therefore making the latest screenshots the new baseline images to do comparisons.
```
backstop approve
```