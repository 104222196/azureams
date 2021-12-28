import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faChessKing, faChessKnight } from "@fortawesome/free-solid-svg-icons";

const coreData = [
    {
        img: "ntt.png",
        name: "Thành Trung",
        description: "Chủ tịch CLB",
        icon: faChessKing
    },
    {
        img: "tvh.png",
        name: "Viết Hoàng",
        description: "Phó chủ tịch CLB",
        icon: faChessKnight
    },
    {
        img: "lmn.png",
        name: "Lê Minh",
        description: "Phó chủ tịch CLB",
        icon: faChessKnight
    }
]

function About() {
    const pfRefs = useRef([]);

    function addPfRef(pf) {
        if (pf) {
            pfRefs.current.push(pf);
        }
    }

    function observerCallback(entries) {
        entries.forEach(entry => {
            entry.target.querySelector(".desc").classList.toggle("typeanim", entry.isIntersecting);
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, {root: null, threshold: 0.5});
        pfRefs.current.forEach(pf => observer.observe(pf));

        return () => {
            pfRefs.current.forEach(pf => observer.unobserve(pf));
        }
    }, [])

    return (
        <div>
            <section id="about-us">
                <h1 className="section-title">About us</h1>
                <div className="terminal terminal-text">
                    <div className="terminal-decoration">
                        <ul>
                            <li><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></li>
                            <li><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></li>
                            <li><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></li>
                        </ul>
                    </div>
                    <p className="text-unimportant text-no-break text-mono paragraph-spacing">
                        azureams ~ % <span className="dynamic-text">azureams run about_us</span>
                    </p>
                    <div className="text-mono text-important text-justify appear">
                        <p className="paragraph-spacing">
                            AzureAms Programming Club là câu lạc bộ chuyên sâu lập trình đầu tiên và duy nhất tại trường THPT Chuyên Hà Nội - Amsterdam.
                        </p>
                        <p className="paragraph-spacing">
                            Azure là một sân chơi mới mẻ cho các bạn học sinh có đam mê lập trình cũng như có sự hứng thú với bộ môn công nghệ thông tin. 
                            Giữa phong trào học tập lập trình trong phạm vi THCS & THPT Amsterdam nói chung hay tất cả trường học trên Hà Nội nói riêng đang trở nên ngày càng thịnh hành và thu hút được đông đảo các bạn học sinh, AzureAms Programing Club được thành lập vào năm 2021!
                        </p>
                        <p className="paragraph-spacing">
                            Tại câu lạc bộ, các bạn sẽ được làm quen với những yêu cầu của việc phát triển các ứng dụng trong một môi trường chuyên nghiệp. Bên cạnh đó, chúng mình mong muốn có thể tạo dựng lên một cộng đồng với trọng tâm về lập trình, cùng nhau tham gia một số dự án mã nguồn mở trong và ngoài trường.
                        </p>
                        <p className="paragraph-spacing">
                            Trong năm, chúng mình dự định sẽ tổ chức một số sự kiện như Hackathon thường niên, hay 5v5 Bug Hunt (thể thao điện tử). Các dự án sẽ mang lại cho từng thành viên cơ hội tiếp xúc với nhiều mảng lập trình khác nhau nhằm phát triển và phát huy vai trò của bản thân. Ngoài ra, một điểm đặc biệt tại Azure chính là do công việc có tính chất chủ yếu là online nên dịch bệnh sẽ hầu như không ảnh hưởng đến hoạt động của CLB.
                        </p>
                        <p className="paragraph-spacing">
                            Bạn có niềm hứng thú sâu sắc với các sản phẩm điện tử, hay nhận thấy bản thân có khả năng lập trình mà chưa biết áp dụng ở đâu?
                        </p>
                        <p className="paragraph-spacing">
                            Chào mừng bạn tới AZUREAMS PROGRAMMING CLUB!
                        </p>
                    </div>
                    <p className="text-unimportant text-mono appear paragraph-spacing">
                        azureams ~ % <span className="blink">|</span>
                    </p>
                </div>
            </section>

            <section id="core">
                <h1 className="section-title">Meet the core</h1>
                <div className="profile-card-container">
                    {
                        coreData.map((member, index) => {
                            return <div className="profile-card" ref={addPfRef} key={index}>
                                <img src={`./assets/${member.img}`} alt=""/>
                                <div>
                                    <p className="name text-normal text-important">{member.name}</p>
                                    <p className="desc text-normal text-no-break text-important text-mono">{member.description}</p>      
                                </div>
                                <FontAwesomeIcon icon={member.icon} className="icon"/>
                            </div>
                        })
                    }
                </div>
            </section>

            <section id="projects">
                <h1 className="section-title">Our projects</h1>
                <div className="project-container">
                    <div className="project-card">
                        <img src="./assets/timetable_beta_0.1.png" alt=""/>
                        <div className="project-description">
                            <a href="#">Timetable App</a>
                            <p className="text-small text-mono text-important text-justify">Đơn giản hóa việc học Online. Join lớp học chỉ bằng 1 click. Thời khóa biểu mang khắp nơi chỉ bằng 1 link Website.</p>
                        </div>
                    </div>
                    <div className="project-card flip">
                        <img src="./assets/azureams_website_0_1release.png" alt=""/>
                        <div className="project-description">
                            <a href="#">Website App</a>
                            <p className="text-small text-mono text-important text-justify">Website giới thiệu CLB với khả năng update vô tận. Sử dụng các kĩ thuật và nền tảng code mới nhất.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;