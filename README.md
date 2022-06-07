Available at: https://cs210032001b3bc2926.z13.web.core.windows.net/

Translation using Microsoft Azure APIs. 

Detect language is on by default.

Speech to text is functional but only for English-US. The language codes for S2T are different to those for translations, as speech has accent concatenated to the language. 


Azure services used: translate, blob storage (for static hosting of website), function app (for saving and retrieving past queries), CosmosDB (for storage of past queries) and Azure text to speech.

Start app using npm start.