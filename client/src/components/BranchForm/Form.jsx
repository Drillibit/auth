import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            branchName: props.branch ? props.branch.branchName : '',
            anglePrice: props.branch ? props.branch.anglePrice : '',
            cutPrice: props.barnch ? props.branch.cutPrice : '',
            customStitch: props.branch ? props.branch.customStitch : '',
            stitchAlignment: props.branch ? props.branch.stitchAlignment : '',
            multiMaterial: props.branch ? props.branch.multiMaterial : '',
            curvePrice: props.branch ? props.barnch.curvePrice : '',
            packPrice: props.branch ? props.branch.packPrice : '',
            error: ''
        };
    }
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.branchName
            ||
            !this.state.anglePrice
            ||
            !this.state.customStitch
            ||
            !this.state.multiMaterial
            ||
            !this.state.cutPrice
            ||
            !this.state.stitchAlignment
            ||
            !this.state.curvePrice
            ||
            !this.state.packPrice) {
            this.setState(() => ({ error: 'Пожалуйста заполните все поля' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                branchName: this.state.branchName,
                anglePrice: this.state.anglePrice,
                cutPrice: this.state.cutPrice,
                customStitch: this.state.customStitch,
                stitchAlignment: this.state.stitchAlignment,
                multiMaterial: this.state.multiMaterial,
                curvePrice: this.state.curvePrice,
                packPrice: this.state.packPrice
            })
        }
    };
    render() {
        return (
            <div>
                <h1>Form</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Город</label>
                        <input
                            name="branchName"
                            type="text"
                            placeholder="Город"
                            autoFocus
                            value={this.state.branchName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Стоимость угла</label>
                        <input
                            name="anglePrice"
                            type="number"
                            placeholder="Стоимость доп угла"
                            value={this.state.anglePrice}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Стоимость Выреза</label>
                        <input
                            name="cutPrice"
                            type="number"
                            placeholder="Вырез"
                            value={this.state.cutPrice}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Стоимость Упаковки</label>
                        <input
                            name="packPrice"
                            type="number"
                            placeholder="Упаковка"
                            value={this.state.packPrice}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Стоимость Кривой</label>
                        <input
                            name="curvePrice"
                            type="number"
                            placeholder="Кривая"
                            value={this.state.curvePrice}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Стоимость заданного шва</label>
                        <input
                            name="customStitch"
                            type="number"
                            placeholder="Заданный шов"
                            value={this.state.customStitch}
                            onChange={this.handleInputChange}
                        />
                        <span>%</span>
                    </div>
                    <div>
                        <label>Стоимость центровки швов</label>
                        <input
                            name="stitchAlignment"
                            type="number"
                            placeholder="Центровка швов"
                            value={this.state.stitchAlignment}
                            onChange={this.handleInputChange}
                        />
                        <span>%</span>
                    </div>
                    <div>
                        <label>Стоимость многофактурности</label>
                        <input
                            name="multiMaterial"
                            type="number"
                            placeholder="Многофактурность"
                            value={this.state.multiMaterial}
                            onChange={this.handleInputChange}
                        />
                        <span>%</span>
                    </div>
                    <button>
                        Добавить город
                    </button>
                </form>
            </div>
        );
    };
};

export default Form;