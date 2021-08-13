import React, { Component } from 'react';

export default class Wellcome extends Component {
  render() {
    return (
      <>
        <div className="wellcome view mask">
          <div className="container-fluid d-flex align-items-center justify-content-center h-100">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-md-10">
                <h1 className="display-4 font-weight-bold pt-5 mb-2 text-white">
                  Дизайн проекты и немецкие кухни
                  <span className="red-text"> nobilia</span>
                </h1>
                <hr className="hr-light" />
                <h2 className="my-4 text-white">
                  Проектируем интерьеры и продаем доставляем собираем немецкую
                  мебель фабрики
                </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
