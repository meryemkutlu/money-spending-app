import React from "react";

function Header({ total, money }) {
  return (
    <>
      <div>
        {(total > 0 && <>Harcayacak {money - total}$ paraniz kaldi!</>) || (
          <>Harcamak icin {money} $ paraniz var!</>
        )}
      </div>
    </>
  );
}

export default Header;
