import React from 'react';

export default function SplitStore2() {
  return (
    <div>
      <div className="card border-danger m-3" style={{ width: '18rem' }}>
        <div class="card-header bg-transparent border-danger">
          <h3 className=" text-danger font-weight-bold">São Paulo</h3>
        </div>

        <div className="card-body">
          <p>Avenida Paulista, 985</p>
          <p>3º andar</p>
          <p>Jardins</p>
          <p>Tel: (11)4444-4444</p>
        </div>
        <div class="card-footer bg-transparent border-danger">
          <a className="btn btn-danger text-white">Fale conosco</a>
        </div>
      </div>
    </div>
  );
}
