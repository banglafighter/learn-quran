import {RapidAppContext, RapidComponent, RapidComponentState, RapidProps, RapidUtil, React} from "react-rapid-app";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "react-rapid-bootstrap";
import alif from "../../assets/audio/alphabet/alif.mp3"
import alBaqarah22 from "../../assets/audio/short-phrase/al-baqarah-2.2.mp3"
import bismillah from "../../assets/audio/short-phrase/bismillah.mp3"
import alFatihah12 from "../../assets/audio/short-phrase/al-fatihah-1.2.mp3"


interface Props extends RapidProps {
}

class State extends RapidComponentState {
    selectedRow: any
    isStarted: boolean = false
    payAllButtonLabel: any = "Play All"
}

export default class ShortPhrases extends RapidComponent<Props, State> {

    state: State = new State();
    static contextType = RapidAppContext

    static defaultProps = {}

    constructor(props: Props) {
        super(props);
    }

    getData() {
        return [
            {
                arabic: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ",
                english: "In the Name of Allah—the Most Compassionate, Most Merciful.",
                bangla: "(আরম্ভ করছি) পরম করুণাময় অসীম দয়াময় আল্লাহর নামে।",
                ayat: "", audio: bismillah
            },
            {
                arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
                english: "All praise is for Allah—Lord of all worlds",
                bangla: "সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সৃষ্টিকুলের রব।",
                ayat: "Al-Fatihah - 1:2", audio: alFatihah12
            },
            {
                arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
                english: "This is the Book! There is no doubt about it, a guide for those mindful of Allah",
                bangla: "এটা ঐ (মহান) কিতাব যাতে কোন সন্দেহ নেই, মুত্তাকীদের জন্য পথ নির্দেশ।",
                ayat: "Al-Baqarah - 2:2", audio: alBaqarah22
            },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },
            // {
            //     arabic: "",
            //     english: "",
            //     bangla: "",
            //     ayat: "", audio: alif
            // },

        ]
    }

    playAudio(index: any, startText?: any, stopText?: any) {
        const _this = this
        let data: any = this.getData()
        _this.setState({selectedRow: index})
        if (data.length > index && this.state.isStarted) {
            _this.setState({payAllButtonLabel: stopText})
            if (data[index].audio !== "" && data[index].audio) {
                let audio: any = new Audio(data[index].audio)
                audio.onended = () => {
                    _this.playAudio(index + 1, startText, stopText)
                }
                audio.play()
            } else {
                _this.playAudio(index + 1, startText, stopText)
            }
        } else {
            _this.setState({payAllButtonLabel: startText, isStarted: false, selectedRow: -1})
        }
    }

    renderUI() {
        const _this = this;

        return (
            <div>
                <div className={"top-action mb-2 m-2 d-flex flex-row-reverse"}>
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.state.isStarted = !this.state.isStarted
                                this.playAudio(0, "Play All", "Stop")
                            }}
                        >
                            {this.state.payAllButtonLabel}
                        </button>
                    </div>
                </div>
                <Table variant={"bordered"} isHoverEffectInRow={true}>
                    <TableBody className={"text-center"}>
                        {this.getData().map((row: any, index: any) => (
                            <TableRow key={index} className={_this.state.selectedRow === index ? "table-secondary text-center" : "text-center"}>
                                <TableCell>
                                    <div>
                                        <div className={"majeed-quranic"}>{row.arabic}</div>
                                        <div className={"mt-1"}>{row.english}</div>
                                        <div className={"mt-1 bangla-text"}>{row.bangla}</div>
                                        <div>{row.ayat}</div>
                                        <Button variant={"light"} className={"text-success"} viewSize={"small"} onClick={() => {
                                            let audio: any = new Audio(row.audio)
                                            audio.play()
                                        }}><i className="fa-solid fa-play"></i></Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}