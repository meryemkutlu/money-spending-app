import React from "react";

function Header({ total, money }) {
  return (
    <>
      <div>
        {total > 0 && money - total !== 0 && (
          <div>Harcayacak {money - total} $ paraniz kaldi! </div>
        )}

        {total === 0 && <div>Harcamak icin {money} $ paraniz var! </div>}

        {money - total === 0 && <div>Paran bitti</div>}
      </div>
    </>
  );
}

export default Header;
