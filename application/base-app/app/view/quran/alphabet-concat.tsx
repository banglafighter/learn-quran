import {RapidAppContext, RapidComponent, RapidComponentState, RapidProps, RapidUtil, React} from "react-rapid-app";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "react-rapid-bootstrap";
import zimAenLam from "../../assets/audio/alphabet/concat/zim-aen-lam.mp3"
import alifZimJal from "../../assets/audio/alphabet/concat/alif-zim-jal.mp3"
import alifJalNun from "../../assets/audio/alphabet/concat/alif-jal-nun.mp3"
import alifMimRo from "../../assets/audio/alphabet/concat/alif-mim-ro.mp3"
import baKhoLam from "../../assets/audio/alphabet/concat/ba-kho-lam.mp3"
import zimMimAen from "../../assets/audio/alphabet/concat/zim-mim-aen.mp3"
import haSinDal from "../../assets/audio/alphabet/concat/ha-sin-dal.mp3"
import haShinRo from "../../assets/audio/alphabet/concat/ha-shin-ro.mp3"
import khoShinEa from "../../assets/audio/alphabet/concat/kho-shin-ea.mp3"
import khoLamKof from "../../assets/audio/alphabet/concat/kho-lam-kof.mp3"
import jalKafRo from "../../assets/audio/alphabet/concat/jal-kaf-ro.mp3"
import aenBaSin from "../../assets/audio/alphabet/concat/aen-ba-sin.mp3"
import aenDalLam from "../../assets/audio/alphabet/concat/aen-dal-lam.mp3"
import kofTaLam from "../../assets/audio/alphabet/concat/kof-ta-lam.mp3"
import shinRoBa from "../../assets/audio/alphabet/concat/shin-ro-ba.mp3"
import kofRoEa from "../../assets/audio/alphabet/concat/kof-ro-ea.mp3"
import haMimKof from "../../assets/audio/alphabet/concat/ha-mim-kof.mp3"
import eaKofJo from "../../assets/audio/alphabet/concat/ea-kof-jo.mp3"
import shinGenLam from "../../assets/audio/alphabet/concat/shin-gen-lam.mp3"
import lamHaSin from "../../assets/audio/alphabet/concat/lam-ha-sin.mp3"
import taLamFa from "../../assets/audio/alphabet/concat/ta-lam-fa.mp3"
import dalKhoLam from "../../assets/audio/alphabet/concat/dal-kho-lam.mp3"
import jalAenRo from "../../assets/audio/alphabet/concat/jal-aen-ro.mp3"
import sodKofLam from "../../assets/audio/alphabet/concat/sod-kof-lam.mp3"
import toRoBa from "../../assets/audio/alphabet/concat/to-ro-ba.mp3"
import kofAenDal from "../../assets/audio/alphabet/concat/kof-aen-dal.mp3"
import baHamjaSin from "../../assets/audio/alphabet/concat/ba-hamja-sin.mp3"
import taAenBa from "../../assets/audio/alphabet/concat/ta-aen-ba.mp3"
import mimTaNun from "../../assets/audio/alphabet/concat/mim-ta-nun.mp3"
import roKafBa from "../../assets/audio/alphabet/concat/ro-kaf-ba.mp3"
import faTaHa from "../../assets/audio/alphabet/concat/fa-ta-ha.mp3"
import owaoSaKof from "../../assets/audio/alphabet/concat/owao-sa-kof.mp3"
import nunSodBa from "../../assets/audio/alphabet/concat/nun-sod-ba.mp3"
import eaDalAen from "../../assets/audio/alphabet/concat/ea-dal-aen.mp3"


interface Props extends RapidProps {
}

class State extends RapidComponentState {
    selectedRow: any
    isStarted: boolean = false
    payAllButtonLabel: any = "Play All"
}

export default class AlphabetConcatView extends RapidComponent<Props, State> {

    state: State = new State();
    static contextType = RapidAppContext

    static defaultProps = {}
    randomData: any
    currentlyPlayingIndex: any = 0
    tableItemPerRow: any = 5
    totalDataLength: any = 0

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.generateRandomTableRow()
    }

    getData() {
        return [
            {letter: "جعل", audio: zimAenLam},
            {letter: "جمع", audio: zimMimAen},
            {letter: "ذكر", audio: jalKafRo},
            {letter: "قري", audio: kofRoEa},
            {letter: "تلف", audio: taLamFa},
            {letter: "طرب", audio: toRoBa},
            {letter: "ركب", audio: roKafBa},

            {letter: "أجذ", audio: alifZimJal},
            {letter: "حسد", audio: haSinDal},
            {letter: "عبس", audio: aenBaSin},
            {letter: "حمق", audio: haMimKof},
            {letter: "خلق", audio: khoLamKof},
            {letter: "قعد", audio: kofAenDal},
            {letter: "فتح", audio: faTaHa},

            {letter: "أذن", audio: alifJalNun},
            {letter: "حشر", audio: haShinRo},
            {letter: "عدل", audio: aenDalLam},
            {letter: "يقظ", audio: eaKofJo},
            {letter: "دخل", audio: dalKhoLam},
            {letter: "ﺑﺌﺲ", audio: baHamjaSin},
            {letter: "وثق", audio: owaoSaKof},

            {letter: "أمر", audio: alifMimRo},
            {letter: "خشي", audio: khoShinEa},
            {letter: "قتل", audio: kofTaLam},
            {letter: "شغل", audio: shinGenLam},
            {letter: "ذعر", audio: jalAenRo},
            {letter: "تعب", audio: taAenBa},
            {letter: "نصب", audio: nunSodBa},

            {letter: "بخل", audio: baKhoLam},
            {letter: "خلق", audio: khoLamKof},
            {letter: "شرب", audio: shinRoBa},
            {letter: "لحس", audio: lamHaSin},
            {letter: "صقل", audio: sodKofLam},
            {letter: "متن", audio: mimTaNun},
            {letter: "يدع", audio: eaDalAen},
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