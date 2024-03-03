import Image from 'next/image';
import { Grid } from '@mui/material';

const LogoComponent = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item>
                <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Apply a box shadow
                }}>
                    <Image 
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwgMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAABgcFBAMIAf/EAD8QAQABAwMBBQIKBgsBAAAAAAABAgMEBQYRIQcSMVFhE0EUIjJkcZGisbLRI1JVk8HwFhckRGJzg5Kho9IV/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUGAf/EACwRAQACAQMCAwYHAAAAAAAAAAABAgMEERIhMTJB8FFhscHR8QUUIjNCcZH/2gAMAwEAAhEDEQA/ANxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHvvcGpaVq1qxg5c2bdViK5piimeZ71Ue+J8k3/AEz139pVfurf/loppr2rvDFk1+PHaazE9PXtbAJDs/1nO1ejOnPyJvTamju800xxz3ufCI8lepvSaW4y04skZaRePMARWAAAAAAAAAAAAAAAAAAAAMj7XLvc3FjRz/dIn7VSH9v6qztnuTRujGj5lTP260F7b1/5dfB+3DzeqpM5rT72vdjlzv2tV69YqtfdU0PIv2sazXeyLlNu1RHNVVU8REMw7F7tUYetXKKJuVUzammiJiJqnivp16PHu3VtTz82qzqFuvGptzzTjT4U+s+c+rFlpzzS2/nI0mlrMxvPrzdTcG8L2r5VGm6TVXZxrtyLdV3wruczx08o6/T9zS4jiOGK7TsfCdyadRxzxeiv/b1/g2pXliK7RCX4XlyZ4vlvPefXxAFLqgAAAAAAAAAAAAADn7gu12dC1G7bqqoroxrlVNVM8TExTPWHQcrdc93bGrT5Yd2fsSlXxQhk8Esfjcmpz46plxP+fV+b64u49SqyrNM6nl1RNymJib9XmkfhD74F/nOxuZ6e1o++HYmlduzzVb5d46qbtwud3deLHzGj8dbPPbT6Lnt7r7m78OPPAon/ALK0ftPQszc+r0YOHHct0x38i/VHxLFv31T/AAj3/XMZ8V4jHDqZcM2yS0vsezqdM0PXdSyqKosRXaponj5dcRV8WPX41P1ubl38jU8+5eu815F+vwpjxmfCI+6Hv1jJxaLGNpWk0ez0zBiabUc9blXvrq9Z6/X6qvYe25sd3Vc6ji5VH9nt1R8mP1vpn3KpmK73nvLl5OWuzVwYvDXz+M/KDbezcnSNYw827douU02qpriOk0VzHHHrHWeq4BktabTvL0ODT49PXjj7ACK8AAAAAAAAAAAAS25t5WtB1GnDrw6r0zbi53ou93xmY48PRUsX7X8n2e7LdMTxxh0firX6elb32sy6zJfHi5U7qj+syx+za/38fk9mTuKjcGydwX7ePNn2OLdpmJr73P6OZ8mK/DZ/Wn615tC93+zjd9cz4Y93r/pS05cGOld6sOm1OfJfjeem0sw9t6vRp97nPxY58b1H4ocT2/Ec97iFts3ZWoaj7DV9Suf/ADdJt1U3Iv3qfjXuJ54op8Z548fDy5W2yREPkYdus9oUvaztvUt0doeDhabREU06fRVfyK+luxR7Sv41U/XxHveiY0/QdJjQdv8AM2OecrLn5eVX5z/h8o/me1rWu5mvZM4em2rlNirp3KI+Nd9avT0dvbm0LWHNOVqUUXcmOtNuOtNH5z/Pqyx+isc/8UZs+TXXnDpvD52+nrr/AE5m0dpzdroz9Vt8Wo62rFUdavWr09Pf999BD+s97zed5dfS6XHpsfCn3AEGkAAAAAAAAAAAAAAYH24X/Z71op+Y25+1W3xK7j2Joe4dXp1LVMGcq/TaptRFWTXbp4iZmOlPj4ytxX4W3VZqc67PzbRkzXXFFETVXVPEUx1mfohsXZ7oWfOwtw4Op2q9NnUaa7VmvLp7nSq33e9xPXjmV3pu28fS6e7pWLp2m0++cXFjv1fTVPi9Ebfxa7tN3MuZGVcjwm7dniPoiOFt88WjZlrivSd8devv6R85Znt/aW3tAyKYxsW7ruq0zHF7Jt/orc+dFr39ffP1wrre29U1fI+Ea5lTRR7rdM8zx6R4Uq/HxcfFt+zxrNu1R5UU8Q+yuc0/xQnQTmnfUW3j2R0j6y8Wm6VhaZa7mHYpo5+VV41VfTL2gqmZnrLoUpWleNY2gAfEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=="
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                </div>
            </Grid>
        </Grid>
    );
};

export default LogoComponent;




