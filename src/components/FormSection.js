function FormSection() {
    return (
        <section className="rents">
            <div className="container px-md-3">
                <div className="card mb-3 form-input">
                    <form action="#" className="d-grid form" method="get" onSubmit={(e) => e.preventDefault()}>
                    <div className="row gx-0">
                        <div className="col-lg-3">
                        <div className="card-body">
                            <label htmlFor="type-driver" className="form-label">Tipe Driver</label>
                            <select className="form-select" aria-label="Default select example" id="type-driver" required>
                            <option value="" disabled selected hidden>Pilih Tipe Driver</option>
                            <option value="sopir">Dengan Sopir</option>
                            <option value="non-sopir">Tanpa Sopir (Lepas Kunci)</option>
                            </select>
                        </div>
                        </div>
        
                        <div className="col-lg-3 col-control" style={{ flexBasis: "calc(20%)" }}>
                        <div className="card-body ps-lg-0">
                            <label htmlFor="date" className="form-label">Tanggal</label>
                            <input type="date" className="form-control" id="date" required />
                        </div>
                        </div>
        
                        <div className="col-lg-3 col-control" style={{ flexBasis: "calc(20%)" }}>
                        <div className="card-body ps-lg-0">
                            <label htmlFor="time" className="form-label">Waktu Jemput/Ambil</label>
                            <input type="time" className="form-control" id="time" required />
                        </div>
                        </div>
        
                        <div className="col-lg-3">
                        <div className="card-body ps-lg-0">
                            <label htmlFor="passenger" className="form-label">Jumlah Penumpang(optional)</label>
                            <div className="input-group">
                            <input type="number" className="form-control" id="passenger" />
                            <span className="input-group-text">
                                <img src="assets/icon/users.svg" alt="users" style={{ width: "20px", height: "20px" }} />
                            </span>
                            </div>
                        </div>
                        </div>
        
                        <div className="col-lg-2 col-control d-flex align-items-end" style={{ flexBasis: "calc(10% - 10px)" }}>
                        <div className="card-body ps-lg-0">
                            <button type="submit" className="btn btn-primary" id="load-btn" style={{ fontSize: "12px" }}>Cari mobil</button>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    );
  }
  
export default FormSection;  