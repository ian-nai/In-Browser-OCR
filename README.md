# [In-Browser-OCR](https://ian-nai.github.io/In-Browser-OCR/)
## https://ian-nai.github.io/In-Browser-OCR/
A web app for performing OCR on images within your browser using Tesseract.js and client-side Javascript. Upload one or more images, select the language of the document(s), and then view and edit the OCR-ed text in your browser (or save it as a .txt file!)

This is now udated for version 5.0.2 of Tesseract.js. Custom language input can now be used, as well, allowing for full access to all of the languages supported by Tesseract!

This app can also be used offline. Click the [Offline Build](https://github.com/ian-nai/In-Browser-OCR/tree/master/Offline_Build) link here or above to download the files you need to run the app without connecting to the internet. Save the files in the same folder, open the offline_index.html file, and you're good to go. Please note that I have not yet updated the offline build to use the latest version of Tesseract.js.

Built using:
* [Tesseract.js](http://tesseract.projectnaptha.com/) - To perform the OCR.
* [Filesaver.js](https://github.com/eligrey/FileSaver.js) - To save the OCR results as a .txt file.
