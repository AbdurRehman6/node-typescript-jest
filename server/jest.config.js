module.exports = {
 
  "moduleFileExtensions": [
   "js",
   "jsx",
   "json",
   "ts",
   "tsx",
 ],
 "moduleDirectories": [
   "node_modules",
   "src",
   "assets"
 ],
   "moduleNameMapper": {
     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/transformer.js",     
     "\\.(css|less)$": "identity-obj-proxy",
   }, 
  "preset": 'ts-jest/presets/js-with-ts',
   "resolver": null
}