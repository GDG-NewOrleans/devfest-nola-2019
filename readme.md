# DevFest New Orleans 2019 Website

This website was created using [Next.js](https://nextjs.org/), a React starter for SSR or static sites. [Styled components](https://www.styled-components.com) is used for styling.

## Getting Started

Clone the repo, cd into it, then run `npm install` or `yarn install`.

Run `npm run dev` to start the development server and go to http://localhost:3000. To use another port, you can run `npm run dev -- -p <your port here>`.

To deploy as a static website, run `npm export` which both performs the build and the export. Now you can deploy the `out` directory to any static hosting service.

We use Github pages for hosting. To push changes to production, run `npm run deploy`.

## Updating Source Data

The source data is written in YAML because it's just easier. If you update one of the YAML data source files in the `data/` folder, run `npm run data` to update the JSON source files with the new data.

## Hack for /static/ assets

Unfortunately, setting the `assetPrefix` in Next.js does not set it for the assets in the /static/ folder. The Sponsor.js and PersonCard.js files contain hacks for this to work in the meantime. When deploying to Github pages, set the value to `true`.

## CFP mode vs later

When you're in CFP mode, use the SpeakerTalksCFP component before the Sponsors section. Afterwards, use the Speakers and Schedule components.

## Headshot Images

Convert headshot images to square and only 500px wide. Here are some ImageMagick `convert` commands for reference:

Just resize:

```
$ convert galaxy.jpg -resize 500 galaxy_500.jpg
```

Resize and crop:

```
$ convert original.jpg -resize "500^>" -gravity center -crop 500x500+0+0 -strip cropped.jpg
```

Resize and crop, but can adjust offset of where to crop:

```
convert -crop 100x100+50+50 input_image.jpg output_image.jpg
```

Explanation:

- `gravity center` center the next operation
- `+profile "*"` do not save any metainfo to the jpeg (making the resulting image smaller). I think `strip` does this too?

Info from https://superuser.com/questions/275476/square-thumbnails-with-imagemagick-convert
