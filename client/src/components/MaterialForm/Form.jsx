import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branch: props.material ? props.material.branch : '',
            name: props.material ? props.material.name : '',
            price: props.material ? props.material.price : '',
            priceGold: props.material ? props.material.priceGold : '',
            pricePlatinum: props.material ? props.material.pricePlatinum : '',
            error: ''
        }
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
        if (!this.state.branch || !this.state.name || !this.state.price) {
            this.setState(() => ({ error: 'Пожалуйста заполните все поля' }));
        } else {
            this.setState(() => ({
                name: '',
                price: 0,
                priceGold: 0,
                pricePlatinum: 0,
                error: ''
            }));
            this.props.onSubmit({
                branch: this.state.branch,
                name: this.state.name,
                price: this.state.price,
                priceGold: this.state.priceGold,
                pricePlatinum: this.state.pricePlatinum
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <select value={this.state.branch} onChange={this.onBranchChange}>
                        <option>Выберите город</option>
                        {this.props.data.map((branch) => {
                            return <option key={branch._id} value={branch.branchName}>{branch.branchName}</option>;
                        })}
                    </select>
                    <input
                        type="text"
                        placeholder="Название материала"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <div>
                        <input
                            type="number"
                            placeholder="Цена"
                            value={this.state.price}
                            onChange={this.onPriceChange}
                        />
                        <input
                            type="number"
                            placeholder="Золото"
                            value={this.state.priceGold}
                            onChange={this.onPriceGoldChange}
                        />
                        <input
                            type="number"
                            placeholder="Платина"
                            value={this.state.pricePlatinum}
                            onChange={this.onPricePlatinumChange}
                        />
                    </div>
                    <button>
                        Добавить Материал
                    </button>
                </form>
            </div>
        );
    }
};

export default Form;