import React from "react";

const ProyectosDestacados = () => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-6">
        Proyectos Destacados
      </h3>

      <div className="space-y-6">

        {/* Proyecto 1 */}
        <div className="flex gap-4 hover:bg-gray-50 p-3 rounded-lg transition">
          <img
            src="/img/redes3.jpg"
            alt=""
            className="w-24 h-20 rounded-lg object-cover"
          />
          <div>
            <p className="text-pink-600 text-xs font-semibold uppercase">
              Redes
            </p>
            <p className="text-sm font-semibold text-gray-900 leading-snug">
              Implementación de segmentación VLAN para optimización de tráfico en red universitaria
            </p>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="flex gap-4 hover:bg-gray-50 p-3 rounded-lg transition">
          <img
            src="/img/ciberseguridad.jpg"
            alt=""
            className="w-24 h-20 rounded-lg object-cover"
          />
          <div>
            <p className="text-pink-600 text-xs font-semibold uppercase">
              Ciberseguridad
            </p>
            <p className="text-sm font-semibold text-gray-900 leading-snug">
              Diseño de un sistema de detección de intrusiones basado en análisis de tráfico en tiempo real
            </p>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="flex gap-4 hover:bg-gray-50 p-3 rounded-lg transition">
          <img
            src="/img/nube.jpg"
            alt=""
            className="w-24 h-20 rounded-lg object-cover"
          />
          <div>
            <p className="text-pink-600 text-xs font-semibold uppercase">
              Computación en la Nube
            </p>
            <p className="text-sm font-semibold text-gray-900 leading-snug">
              Migración de servicios académicos a infraestructura cloud con alta disponibilidad
            </p>
          </div>
        </div>

        {/* Proyecto 4 */}
        <div className="flex gap-4 hover:bg-gray-50 p-3 rounded-lg transition">
          <img
            src="/img/iot.jpg"
            alt=""
            className="w-24 h-20 rounded-lg object-cover"
          />
          <div>
            <p className="text-pink-600 text-xs font-semibold uppercase">
              IoT
            </p>
            <p className="text-sm font-semibold text-gray-900 leading-snug">
              Sistema de monitoreo inteligente para laboratorios mediante dispositivos IoT
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProyectosDestacados;