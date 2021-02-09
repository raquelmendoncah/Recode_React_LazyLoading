import React from 'react';

export default function SplitStore3() {
  return (
    <div>
      <div className="card border-danger m-3" style={{ width: '18rem' }}>
        <div class="card-header bg-transparent border-danger">
          <h3 className=" text-danger font-weight-bold">Santa Catarina</h3>
        </div>

        <div className="card-body">
          <p>Rua Major Avila, 370</p>
          <p>Vila Mariana</p>
          <p>Tel: (47)5555-5555</p>
        </div>
        <div class="card-footer bg-transparent border-danger">
          <a className="btn btn-danger text-white">Fale conosco</a>
        </div>
      </div>
    </div>
  );
}
