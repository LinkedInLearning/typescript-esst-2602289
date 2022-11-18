export function Demo() {
  type PossibleTypes = "CAR" | "BUS";
  // type VehicleId = `ID_${PossibleTypes}_${number}`;

  type VehicleTypeGeneric<
    VehicleType extends PossibleTypes
  > = `ID_${VehicleType}_${number}`;

  type VehicleBusId = VehicleTypeGeneric<"BUS">;
  type VehicleCarId = VehicleTypeGeneric<"CAR">;

  const busId: VehicleBusId = "ID_BUS_5";
  const carId: VehicleCarId = "ID_CAR_01";
}
