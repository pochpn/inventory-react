import React, { Component } from 'react'
import history from '../history'
import Hamburger from './Hamburger'

import styled, { css } from 'styled-components'
import { connect } from 'react-redux';
import { search, shelf, plus } from '../pic'
import Paper from '@material-ui/core/Paper';
import { Success, Error } from '../pic';
import './Modal.css';



const Font = styled.div`
  && {
    color: #000000;
    font-size: 24px;
  }
`

const ButtonDelete = styled.button`
  background: #ef3f3e;
  border: 2px;
  color: #ffffff;
  width: 200px;
  height: 110px;
  border-radius: 20px;
  margin: 0 1em;
  padding: 0.5em 1.5em;
`

const ButtonEdit = styled.button`
  background: #929990;
  border: 2px;
  color: #ffffff;
  width: 200px;
  height: 110px;
  border-radius: 20px;
  margin: 0 1em;
  padding: 0.5em 1.5em;
`
const ButtonInputCount = styled.button`
  background: #929990;
  border: 2px;
  color: blue;
  width: 200px;
  height: 110px;
  border-radius: 20px;
  margin: 0 1em;
  padding: 0.5em 1.5em;
`


class ViewStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalQues: false,
            modalSuc: false,
            modalEdit: false,
            user: this.props.userList[this.props.userList.length - 1],
        };
    }

    handleModalQuesClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass == 'modal-cardforget') {
            return;
        }
        this.setState({ modalQues: !this.state.modalQues });
    };


    handleModalQuesOpen = () => {
        this.setState({ modalQues: !this.state.modalQues });
    };


    handleModalSucClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass == 'modal-cardforget') {
            return;
        }
        this.setState({ modalSuc: !this.state.modalSuc });
    };


    handleModalSucOpen = () => {
        this.setState({ modalSuc: !this.state.modalSuc });
    };


    handleModalEditClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass == 'modal-cardforget') {
            return;
        }
        this.setState({ modalEdit: !this.state.modalEdit });
    };


    handleModalEditOpen = () => {
        this.setState({ modalEdit: !this.state.modalEdit });
    };


    render() {
        return (
            <div className="bg">
                <Hamburger page='EDIT SHELF' user={this.state.user} />
                <div className="paper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '15%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <a1 style={{ fontSize: 24, fontWeight: 'bold' }}>Shelf ID</a1>
                        <input type="text" style={{ fontSize: 24 }}></input>
                    </div>
                    <div style={{ width: '50%' }}>
                    </div>
                    <img
                        style={{ justifyContent: 'flex-end', width: "10%", }}
                        src={search} />

                </div>
                <div style={{ display: 'flex', alignItems: 'center', height: "15%", marginTop: '2%', marginBottom: '2%', }}>
                    <a1 style={{ fontSize: 36, fontWeight: 'bold', marginLeft: "5%" }}>Please select Shelf</a1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', padding: "1%", alignItems: 'center', }}>
                    {this.props.shelfList.map((item) => {
                        return (
                            <Paper className="paperShelf" style={{ borderRadius: "10%" }} onClick={this.handleModalQuesOpen}>
                                <div style={{ alignItems: 'center', justifyItems: 'center' }}>
                                    <img className="imViewStock" src={shelf} />
                                    <p className="textEditShelf">{item.shelfID}</p>
                                </div>
                            </Paper>
                        );
                    })}
                    <Paper className="paperShelf" style={{ borderRadius: "10%" }}>
                        <div style={{ alignItems: 'center', justifyItems: 'center' }}>
                            <img className="imViewStock" src={plus} />
                            <p className="textAddEditShelf">ADD SHELF</p>
                        </div>
                    </Paper>
                </div>

                <div hidden={!this.state.modalQues}>
                    <div className="modal-background">
                        <div className="modal-editstock-deloredit">
                            <div style = {{display: 'flex', justifyContent: 'center'}}>
                                <Font>Text Shelf ใส่ด้วยไอ่สัส</Font>
                            </div>
                            <div style = {{display: 'flex', justifyContent: 'space-around', paddingTop: 50}}>
                                <ButtonDelete style = {{fontSize: 30}}> Delete </ButtonDelete>
                                <ButtonEdit style = {{fontSize: 30}}> Edit </ButtonEdit>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalSuc}>
                    <div className="modal-background">
                        <div className="modal-cardforget">
                            <div>
                                <img className="picSuccess" src={Success} />
                            </div>
                            <div>
                                <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 130 }} >
                                    <p>Success</p>
                                </Font>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={!this.state.modalEdit}>
                    <div className="modal-background">
                        <div className="modal-cardforget">

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList,
        shelfList: state.shelfReducer.shelfList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStock);
