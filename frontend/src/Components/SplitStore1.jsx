import React from 'react';

export default function SplitStore1() {
  return (
    <div>
      <div className="card border-danger m-3" style={{ width: '18rem' }}>
        <div class="card-header bg-transparent border-danger">
          <h3 className=" text-danger font-weight-bold">Rio de Janeiro</h3>
        </div>

        <div className="card-body">
          <p>Avenida Presidente Vargas, 5.000</p>
          <p>10º andar</p>
          <p>Centro</p>
          <p>Tel: (21)3333-3333</p>
        </div>
        <div class="card-footer bg-transparent border-danger">
          <a className="btn btn-danger text-white">Fale conosco</a>
        </div>
      </div>
    </div>
  );
}
