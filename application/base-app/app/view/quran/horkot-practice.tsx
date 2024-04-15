import {RapidAppContext, RapidComponent, RapidComponentState, RapidProps, RapidUtil, React} from "react-rapid-app";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "react-rapid-bootstrap";
import zimAenLam from "../../assets/audio/horkot-practice/a-so-da.mp3"

import aSoDa from "../../assets/audio/horkot-practice/a-so-da.mp3"
import baToSha from "../../assets/audio/horkot-practice/ba-to-sha.mp3"
import faOyaKo from "../../assets/audio/horkot-practice/fa-oya-ko.mp3"
import goSaLa from "../../assets/audio/horkot-practice/go-sa-la.mp3"
import haDoRo from "../../assets/audio/horkot-practice/ha-do-ro.mp3"
import haLaBa from "../../assets/audio/horkot-practice/ha-la-ba.mp3"
import jaAKho from "../../assets/audio/horkot-practice/ja-a-kho.mp3"
import jaSaMa from "../../assets/audio/horkot-practice/ja-sa-ma.mp3"
import kRoSa from "../../assets/audio/horkot-practice/k-ro-sa.mp3"
import ladaYa from "../../assets/audio/horkot-practice/lada-ya.mp3"
import naJaTa from "../../assets/audio/horkot-practice/na-ja-ta.mp3"
import oJalA from "../../assets/audio/horkot-practice/o-jal-a.mp3"
import shaKhoDa from "../../assets/audio/horkot-practice/sha-kho-da.mp3"
import soHaJo from "../../assets/audio/horkot-practice/so-ha-jo.mp3"
import taMaHa from "../../assets/audio/horkot-practice/ta-ma-ha.mp3"
import yaAKa from "../../assets/audio/horkot-practice/ya-a-ka.mp3"

import kps1 from "../../assets/audio/horkot-practice/kps-1.mp3"
import kps2 from "../../assets/audio/horkot-practice/kps-2.mp3"
import kps3 from "../../assets/audio/horkot-practice/kps-3.mp3"
import kps4 from "../../assets/audio/horkot-practice/kps-4.mp3"
import kps5 from "../../assets/audio/horkot-practice/kps-5.mp3"
import kps6 from "../../assets/audio/horkot-practice/kps-6.mp3"
import kps7 from "../../assets/audio/horkot-practice/kps-7.mp3"
import kps8 from "../../assets/audio/horkot-practice/kps-8.mp3"
import kps9 from "../../assets/audio/horkot-practice/kps-9.mp3"
import kps10 from "../../assets/audio/horkot-practice/kps-10.mp3"
import kps11 from "../../assets/audio/horkot-practice/kps-11.mp3"
import kps12 from "../../assets/audio/horkot-practice/kps-12.mp3"
import kps13 from "../../assets/audio/horkot-practice/kps-13.mp3"
import kps14 from "../../assets/audio/horkot-practice/kps-14.mp3"
import kps15 from "../../assets/audio/horkot-practice/kps-15.mp3"
import kps16 from "../../assets/audio/horkot-practice/kps-16.mp3"

import dps1 from "../../assets/audio/horkot-practice/dps-1.mp3"
import dps2 from "../../assets/audio/horkot-practice/dps-2.mp3"
import dps3 from "../../assets/audio/horkot-practice/dps-3.mp3"
import dps4 from "../../assets/audio/horkot-practice/dps-4.mp3"
import dps5 from "../../assets/audio/horkot-practice/dps-5.mp3"
import dps6 from "../../assets/audio/horkot-practice/dps-6.mp3"
import dps7 from "../../assets/audio/horkot-practice/dps-7.mp3"
import dps8 from "../../assets/audio/horkot-practice/dps-8.mp3"
import dps9 from "../../assets/audio/horkot-practice/dps-9.mp3"
import dps10 from "../../assets/audio/horkot-practice/dps-10.mp3"
import dps11 from "../../assets/audio/horkot-practice/dps-11.mp3"
import dps12 from "../../assets/audio/horkot-practice/dps-12.mp3"
import dps13 from "../../assets/audio/horkot-practice/dps-13.mp3"
import dps14 from "../../assets/audio/horkot-practice/dps-14.mp3"
import dps15 from "../../assets/audio/horkot-practice/dps-15.mp3"
import dps16 from "../../assets/audio/horkot-practice/dps-16.mp3"

import cps1 from "../../assets/audio/horkot-practice/cps-1.mp3"
import cps2 from "../../assets/audio/horkot-practice/cps-2.mp3"
import cps3 from "../../assets/audio/horkot-practice/cps-3.mp3"
import cps4 from "../../assets/audio/horkot-practice/cps-4.mp3"
import cps5 from "../../assets/audio/horkot-practice/cps-5.mp3"
import cps6 from "../../assets/audio/horkot-practice/cps-6.mp3"
import cps7 from "../../assets/audio/horkot-practice/cps-7.mp3"
import cps8 from "../../assets/audio/horkot-practice/cps-8.mp3"
import cps9 from "../../assets/audio/horkot-practice/cps-9.mp3"
import cps10 from "../../assets/audio/horkot-practice/cps-10.mp3"
import cps11 from "../../assets/audio/horkot-practice/cps-11.mp3"
import cps12 from "../../assets/audio/horkot-practice/cps-12.mp3"
import cps13 from "../../assets/audio/horkot-practice/cps-13.mp3"
import cps14 from "../../assets/audio/horkot-practice/cps-14.mp3"
import cps15 from "../../assets/audio/horkot-practice/cps-15.mp3"
import cps16 from "../../assets/audio/horkot-practice/cps-16.mp3"
import cps17 from "../../assets/audio/horkot-practice/cps-17.mp3"
import cps18 from "../../assets/audio/horkot-practice/cps-18.mp3"
import cps19 from "../../assets/audio/horkot-practice/cps-19.mp3"
import cps20 from "../../assets/audio/horkot-practice/cps-20.mp3"
import cps21 from "../../assets/audio/horkot-practice/cps-21.mp3"
import cps22 from "../../assets/audio/horkot-practice/cps-22.mp3"
import cps23 from "../../assets/audio/horkot-practice/cps-23.mp3"
import cps24 from "../../assets/audio/horkot-practice/cps-24.mp3"
import cps25 from "../../assets/audio/horkot-practice/cps-25.mp3"
import cps26 from "../../assets/audio/horkot-practice/cps-26.mp3"
import cps27 from "../../assets/audio/horkot-practice/cps-27.mp3"
import cps28 from "../../assets/audio/horkot-practice/cps-28.mp3"
import cps29 from "../../assets/audio/horkot-practice/cps-29.mp3"
import cps30 from "../../assets/audio/horkot-practice/cps-30.mp3"
import cps31 from "../../assets/audio/horkot-practice/cps-31.mp3"
import cps32 from "../../assets/audio/horkot-practice/cps-32.mp3"
import cps33 from "../../assets/audio/horkot-practice/cps-33.mp3"
import cps34 from "../../assets/audio/horkot-practice/cps-34.mp3"

import fpd1 from "../../assets/audio/horkot-practice/fpd-1.mp3"
import fpd2 from "../../assets/audio/horkot-practice/fpd-2.mp3"
import fpd3 from "../../assets/audio/horkot-practice/fpd-3.mp3"
import fpd4 from "../../assets/audio/horkot-practice/fpd-4.mp3"
import fpd5 from "../../assets/audio/horkot-practice/fpd-5.mp3"
import fpd6 from "../../assets/audio/horkot-practice/fpd-6.mp3"
import fpd7 from "../../assets/audio/horkot-practice/fpd-7.mp3"
import fpd8 from "../../assets/audio/horkot-practice/fpd-8.mp3"
import fpd9 from "../../assets/audio/horkot-practice/fpd-9.mp3"
import fpd10 from "../../assets/audio/horkot-practice/fpd-10.mp3"
import fpd11 from "../../assets/audio/horkot-practice/fpd-11.mp3"
import fpd12 from "../../assets/audio/horkot-practice/fpd-12.mp3"
import fpd13 from "../../assets/audio/horkot-practice/fpd-13.mp3"
import fpd14 from "../../assets/audio/horkot-practice/fpd-14.mp3"
import fpd15 from "../../assets/audio/horkot-practice/fpd-15.mp3"
import fpd16 from "../../assets/audio/horkot-practice/fpd-16.mp3"


interface Props extends RapidProps {
}

class State extends RapidComponentState {
    selectedRow: any
    isStarted: boolean = false
    payAllButtonLabel: any = "Play All"
}

export default class HorkotPracticeView extends RapidComponent<Props, State> {

    state: State = new State();
    static contextType = RapidAppContext

    static defaultProps = {}
    randomData: any
    currentlyPlayingIndex: any = 0
    tableItemPerRow: any = 6
    totalDataLength: any = 0

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.generateRandomTableRow()
    }

    getData() {
        return [
            {letter: "اَصَدَ", audio: aSoDa},
            {letter: "بَطَشَ", audio: baToSha},
            {letter: "فَوَقَ", audio: faOyaKo},
            {letter: "غَسَلَ", audio: goSaLa},
            {letter: "هَضَرَ", audio: haDoRo},
            {letter: "نَزَتَ", audio: naJaTa},
            {letter: "شَخَدَ", audio: shaKhoDa},
            {letter: "صَحَظَ", audio: soHaJo},
            {letter: "ذَأَخَ", audio: jaAKho},
            {letter: "يَعَكَ", audio: yaAKa},
            {letter: "زَثَمَ", audio: jaSaMa},
            {letter: "تَمَحَ", audio: taMaHa},
            {letter: "قَرَسَ", audio: kRoSa},
            {letter: "لَدَيَ", audio: ladaYa},
            {letter: "حَلَبَ", audio: haLaBa},
            {letter: "وَجَعَ", audio: oJalA},

            {letter: "ظِهِفِ", audio: kps1},
            {letter: "هِفِوِ", audio: kps2},
            {letter: "كِنِزِ", audio: kps3},
            {letter: "خِتِهِ", audio: kps4},
            {letter: "لِطِرِ", audio: kps5},
            {letter: "قِعِحِ", audio: kps6},
            {letter: "رِمِغِ", audio: kps7},
            {letter: "سِنِبِ", audio: kps8},
            {letter: "صِشِقِ", audio: kps9},
            {letter: "تِبِنِ", audio: kps10},
            {letter: "تِزِرِ", audio: kps11},
            {letter: "طِثِهِ", audio: kps12},
            {letter: "ٳِدِزِ", audio: kps13},
            {letter: "ذِضِسِ", audio: kps14},
            {letter: "وِهِلِ", audio: kps15},
            {letter: "ٳِقِجِ", audio: kps16},

            {letter: "بُءُزُ", audio: dps1},
            {letter: "ذُقُغُ", audio: dps2},
            {letter: "حُبُمُ", audio: dps3},
            {letter: "جُكُوُ", audio: dps4},
            {letter: "كُءُحُ", audio: dps5},
            {letter: "مُضُفُ", audio: dps6},
            {letter: "نُمُظُ", audio: dps7},
            {letter: "أُدُتُ", audio: dps8},
            {letter: "عُفُكُ", audio: dps9},
            {letter: "رُنُشُ", audio: dps10},
            {letter: "صُهُيُ", audio: dps11},
            {letter: "ثُبُئُ", audio: dps12},
            {letter: "تُوُسُ", audio: dps13},
            {letter: "طُرُأُ", audio: dps14},
            {letter: "وُخُضُ", audio: dps15},
            {letter: "يُظُهُ", audio: dps16},

            {letter: "جَعَلَ", audio: cps1},
            {letter: "أَجَذَ", audio: cps2},
            {letter: "أَذِنَ", audio: cps3},
            {letter: "أَمَرَ", audio: cps4},
            {letter: "بَخِلَ", audio: cps5},
            {letter: "قَعَدَ", audio: cps6},
            {letter: "ﺑَﺌِﺲَ", audio: cps7},
            {letter: "تَعِبَ", audio: cps8},
            {letter: "خَشِيَ", audio: cps9},
            {letter: "خُلِقَ", audio: cps10},
            {letter: "وَثُقَ", audio: cps11},
            {letter: "يَدَعُ", audio: cps12},
            {letter: "نَصِبَ", audio: cps13},
            {letter: "طَرِبَ", audio: cps14},
            {letter: "فَتَحَ", audio: cps15},
            {letter: "ذُعِرَ", audio: cps16},
            {letter: "صَقَلَ", audio: cps17},
            {letter: "قُرِٸَ", audio: cps18},
            {letter: "رَكِبَ", audio: cps19},
            {letter: "دَخَلَ", audio: cps20},
            {letter: "لَحِسَ", audio: cps21},
            {letter: "ذَكَرَ", audio: cps22},
            {letter: "عَبَسَ", audio: cps23},
            {letter: "خَلَقَ", audio: cps24},
            {letter: "شُغِلَ", audio: cps25},
            {letter: "حَسَدَ", audio: cps26},
            {letter: "حَشَرَ", audio: cps27},
            {letter: "يَقُظَ", audio: cps28},
            {letter: "حَمَقِ", audio: cps29},
            {letter: "جَمَعَ", audio: cps30},
            {letter: "تَلِفَ", audio: cps31},
            {letter: "مَتُنَ", audio: cps32},
            {letter: "شَرِبَ", audio: cps33},
            {letter: "قُتِلَ", audio: cps34},

            {letter: "عَدَدًا", audio: fpd1},
            {letter: "أَحَدًا", audio: fpd2},
            {letter: "دَرَجَتً", audio: fpd3},
            {letter: "غَدَقًا", audio: fpd4},
            {letter: "هَرَبًا", audio: fpd5},
            {letter: "حَسَنًا", audio: fpd6},
            {letter: "حَطَبًا", audio: fpd7},
            {letter: "قَذِبًا", audio: fpd8},
            {letter: "لِبَدًا", audio: fpd9},
            {letter: "صَعَدًا", audio: fpd10},
            {letter: "سُدًى", audio: fpd11},
            {letter: "رَهَقًا", audio: fpd12},
            {letter: "شَطَطًا", audio: fpd13},
            {letter: "شُهُبًا", audio: fpd14},
            {letter: "قُرًى", audio: fpd15},
            {letter: "عَجَبًا", audio: fpd16},

            {letter: "أَحَدٍ", audio: zimAenLam},
            {letter: "أَخَلٍ", audio: zimAenLam},
            {letter: "بِنَبَٳٍ", audio: zimAenLam},
            {letter: "بِشَرَرٍ", audio: zimAenLam},
            {letter: "حَرَجٍ", audio: zimAenLam},
            {letter: "جَبَلٍ", audio: zimAenLam},
            {letter: "خُلُقٍ", audio: zimAenLam},
            {letter: "مَسَدٍ", audio: zimAenLam},
            {letter: "نُصُبٍ", audio: zimAenLam},
            {letter: "أُمَمٍ", audio: zimAenLam},
            {letter: "سَعَتٍ", audio: zimAenLam},
            {letter: "سَغَرَتٍ", audio: zimAenLam},
            {letter: "سَغَرٍ", audio: zimAenLam},
            {letter: "شَجَرٍ", audio: zimAenLam},
            {letter: "صُحُفٍ", audio: zimAenLam},
            {letter: "شُعَبٍ", audio: zimAenLam},

            {letter: "أَخٌ", audio: zimAenLam},
            {letter: "بَشَرٌ", audio: zimAenLam},
            {letter: "لَقَسَمٌ", audio: zimAenLam},
            {letter: "فَنُزُلٌ", audio: zimAenLam},
            {letter: "حَرَجٌ", audio: zimAenLam},
            {letter: "حَسَنَتٌ", audio: zimAenLam},
            {letter: "مَلَكٌ", audio: zimAenLam},
            {letter: "نَفَرٌ", audio: zimAenLam},
            {letter: "حُمُرٌ", audio: zimAenLam},
            {letter: "وَدِيَتٌ", audio: zimAenLam},
            {letter: "عَسِرٌ", audio: zimAenLam},
            {letter: "أُذُنٌ", audio: zimAenLam},
            {letter: "خُشُبٌ", audio: zimAenLam},
            {letter: "لَعِبٌ", audio: zimAenLam},
            {letter: "وَلَدٌ", audio: zimAenLam},
            {letter: "مَرَضٌ", audio: zimAenLam},

            {letter: "رَقَبَةٍ", audio: zimAenLam},
            {letter: "سُرُرٌ", audio: zimAenLam},
            {letter: "عَمَدٍ", audio: zimAenLam},
            {letter: "غَبَرَةٌ", audio: zimAenLam},
            {letter: "هُدًى", audio: zimAenLam},
            {letter: "لَهَبٍ", audio: zimAenLam},
            {letter: "نَخِرَةً", audio: zimAenLam},
            {letter: "وَسَطًا", audio: zimAenLam},
            {letter: "أَبَدًا", audio: zimAenLam},
            {letter: "طَبَقًا", audio: zimAenLam},
            {letter: "هُمَزَةٍ", audio: zimAenLam},
            {letter: "طُوًى", audio: zimAenLam},
        ]
    }

    playAudio(index: any, startText?: any, stopText?: any) {
        const _this = this
        let data: any = this.randomData
        if (!data) {
            return
        }
        let itemPerRowWithZeroCount: any = _this.tableItemPerRow - 1
        if (index < (this.currentlyPlayingIndex - itemPerRowWithZeroCount) || index === undefined) {
            if (this.currentlyPlayingIndex >= this.totalDataLength) {
                _this.setState({payAllButtonLabel: startText, isStarted: false, selectedRow: -1})
                return;
            }
            index = this.currentlyPlayingIndex + itemPerRowWithZeroCount
            if (index >= this.totalDataLength) {
                index = this.totalDataLength - 1
            }
        }
        this.currentlyPlayingIndex++
        _this.setState({selectedRow: index})
        if (data.length > index && this.state.isStarted) {
            _this.setState({payAllButtonLabel: stopText})
            if (data[index].audio !== "" && data[index].audio) {
                let audio: any = new Audio(data[index].audio)
                audio.onended = () => {
                    _this.playAudio(index - 1, startText, stopText)
                }
                audio.play()
            } else {
                _this.playAudio(index - 1, startText, stopText)
            }
        } else {
            _this.setState({payAllButtonLabel: startText, isStarted: false, selectedRow: -1})
        }
    }

    generateRandomTableRow() {
        const _this = this;
        // _this.randomData = _this.getData().sort(() => Math.random() - 0.5)
        _this.randomData = _this.getData()
        this.notifyComponentChange()
    }

    getTableRowHTML(){
        const _this = this;
        if (!_this.randomData) {
            return
        }
        let rowHTML: any = []
        let data: any = _this.randomData
        let itemPerRow: any = _this.tableItemPerRow
        let totalData: any = _this.totalDataLength = data.length
        let numberOfRow: any = Math.ceil(totalData / itemPerRow)
        for (let row = 0; row <= numberOfRow; row++) {
            let maxRunRow: any = (row * itemPerRow) + itemPerRow
            if (maxRunRow > totalData) {
                maxRunRow = totalData
            }
            let cellHTML: any = []
            let itemIndex: any = row * itemPerRow
            for (; itemIndex < maxRunRow; itemIndex++) {
                let dataItem: any = data[itemIndex]
                cellHTML.push(
                    <TableCell key={itemIndex} className={_this.state.selectedRow === itemIndex ? "table-secondary text-center" : "text-center"}>
                        {dataItem.letter}
                        <Button
                            onClick={() => {
                                let audio: any = new Audio(dataItem.audio)
                                audio.play()
                            }}
                            viewSize={"small"}
                            className={"ms-3 text-success"}
                            variant={"light"}>
                            <i className="fa-solid fa-play"></i>
                        </Button>
                    </TableCell>
                )
            }
            rowHTML.push(
                <TableRow key={itemIndex}>{cellHTML}</TableRow>
            )
        }
        return rowHTML;
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
                                this.currentlyPlayingIndex = 0
                                this.playAudio( undefined, "Play All", "Stop")
                            }}
                        >
                            {this.state.payAllButtonLabel}
                        </button>
                    </div>
                </div>
                <Table className={"text-center"} variant={"bordered"}>
                    <TableBody className={"majeed-quranic"}>
                        {_this.getTableRowHTML()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}