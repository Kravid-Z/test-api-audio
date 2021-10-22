import apiaudio from "apiaudio";

async function helloWorld() {
  try {
    apiaudio.default.configure({ apiKey: process.env.APIKEYAUDIO });
    const script = await apiaudio.Script.create({
      scriptText:
        "<<soundSegment::ambience>> <<sectionName::hello>> Hello world. Welcome to API dot audio. Create audio in a few easy steps  <<soundSegment::music>> <<sectionName::goodbye>> Add in sounds and music ambience with our sound templates. Welcome!",
      scriptName: "hello",
      projectName: "hello",
      moduleName: "hello",
    });
    console.log(script);

    const speech = await apiaudio.Speech.create({
      scriptId: script["scriptId"],
      voice: "Aria",
    });
    console.log(speech);

    const template = "parisianmorning";
    const mastering = await apiaudio.Mastering.create({
      scriptId: script["scriptId"],
      soundTemplate: template,
    });
    console.log(mastering);

    const masteringResult = await apiaudio.Mastering.retrieve(
      script["scriptId"],
      {}
    );
    console.log(masteringResult);
  } catch (e) {
    console.error(e);
  }
}

helloWorld();
