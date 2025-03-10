import { motion } from "framer-motion";

function PageHeader() {
    return (
        <motion.nav 
            className="navbar navbar-expand-lg navbar-light shadow-sm" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 3 }} 
            transition={{ duration: 3 }}
            style={{ fontFamily: 'Poppins, sans-serif' }}
        >
            <motion.div 
                className="container-fluid"
                animate={{ background: [
                    'linear-gradient(90deg, #1f3c88 0%, #16213e 100%)',
                    'linear-gradient(90deg, #16213e 0%, #1f3c88 100%)'
                ] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
                <a className="navbar-brand fw-bold text-white" href="/" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem' }}>
                    User Management System
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <motion.li 
                            className="nav-item" 
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        >
                            <a className="nav-link active text-white fw-semibold" aria-current="page" href="/users/list" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}>
                                Users 👤
                            </a>
                        </motion.li>
                        <motion.li 
                            className="nav-item" 
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <a className="nav-link text-white fw-semibold" href="/users/create" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}>
                                Add User ➕
                            </a>
                        </motion.li>
                    </ul>
                </div>
            </motion.div>
        </motion.nav>
    );
}

export default PageHeader;