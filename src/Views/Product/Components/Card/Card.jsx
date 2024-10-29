import { useState } from "react";
import "./Card.css";

export default function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="card-image">
            {/* Placeholder for product image */}
            <img
              src="/placeholder.svg?height=200&width=356"
              alt="CNC Router 3 Ejes – 0505"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="card-title">CNC Router 3 Ejes – 0505</h2>
          <p className="card-description">
            Cortes y grabados precisos en múltiples materiales.
          </p>
        </div>
        <div className="card-content">
          <ul className="card-list">
            <li className="card-list-item">
              <strong style={{ color: "#292" }}>✓</strong>- Área de trabajo: 500
              x 500 x 250 mm
            </li>
            <li className="card-list-item">
              <strong style={{ color: "#292" }}>✓</strong>- Potencia: 3 kW
            </li>
            <li className="card-list-item">
              <strong style={{ color: "#292" }}>✓</strong>- Precisión: ±0,05 mm
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="button" onClick={() => setIsModalOpen(true)}>
            Ver más detalles
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="card-title">Detalles de CNC Router 3 Ejes – 0505</h2>
            <ul className="card-list">
              <li>Comando CNC: LinuxCNC, soporta G-Code.</li>
              <li>Software compatible: Vectric, Type3, ArtCam, etc.</li>
              <li>Sistema de Refrigeración: Agua, 3500 L/H.</li>
              <li>Accionamiento: Motores PAP Nema 34, guías PMI.</li>
              <li>Velocidad de corte: 5,000 a 15,000 mm/min.</li>
              <li>Garantía: 12 meses.</li>
              <li>Servicios: Capacitación y soporte post-venta.</li>
            </ul>
            <button className="button" onClick={() => setIsModalOpen(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
