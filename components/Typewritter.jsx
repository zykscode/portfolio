import Typewriter from 'typewriter-effect'
import GraphemeSplitter from 'grapheme-splitter'

const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter()
    return splitter.splitGraphemes(string)
}

const Typewritter = () => {
    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .pauseFor(2500)
                    .typeString('<span class="text-3xl"> "Hello World 👋 "</span>')
                    .pauseFor(300)
                    .typeString(
                        '<br/> I am <span class="notion-yellow_background"><b>Zyk</b></span>'
                    )
                    .pauseFor(1000)
                    .start()
            }}
            options={{
                stringSplitter,
                autoStart: true,
                loop: false,
            }}
        />
    )
}

export default Typewritter
