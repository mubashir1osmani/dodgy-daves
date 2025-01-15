import { HfInference } from "@huggingface/inference";

//we created a hugging face token
const hf = new HfInference(process.env.HF_TOKEN);

const textToClassify = "I just bought a new car, its mediocre but i LOVE it.";

const response = await hf.textGeneration({
    inputs: textToClassify,
    model: "HuggingFaceH4/zephyr-7b-beta"
})

console.log(response)