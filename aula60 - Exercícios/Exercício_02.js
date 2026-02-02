function isLandscape (hieght, width) {
    if (hieght > width) {
        return 'This photo is on portrait.'
    } else {
        return 'This photo is on landscape.'
    }
}

const isWidescreen = (h, w) => h > w ? 'Portrait':'Widescreen'

console.log(isLandscape(hieght=150, width=359))

console.log(isWidescreen(h=1920, w=2480))