import { Link } from 'react-router-dom'
export const UnauthenticatedTutorial = () => {
  return (
    <div className=' bg-slate-400'>
      <div className='md:flex md:justify-center md:mx-20 py-6 '>
        <section className='md:mx-5  basis-1/3 '>
          <section className=' text-center bg-white py-6 mb-2 '>
            <div>
              <i className='fas fa-userfa-1x font-icon text-xl ' />
              <span className='mb-4 text-l'>Espace prive</span>
            </div>

            <div className='mt-5 flex justify-center'>
              <Link
                to='/login'
                className='flex items-center justify-center mb-4 h-10  w-11/12 max-w-prose text-sm  px-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
              >
                Se connecter
              </Link>
            </div>
            <div className='flex justify-center mb-4'>
              <Link
                to='/register'
                className='flex items-center justify-center mb-4 h-10  w-11/12 max-w-prose text-sm  px-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
              >
                S'enregistrer
              </Link>
            </div>
            <div className='text-xs text-left' href>
              <Link to='/register'>Mot de passe oublie</Link>
            </div>
          </section>
          <section className='text-center bg-white py-3'>
            <section className='espace'>
              <i className='fas fa-folder fa-3x font-icon ' />
              <h2 class='py-2'>Etat dossier</h2>
              <div className='box px-3'>
                <i className='fas fa-folder-open absolute-icon' />
                <input
                  type='text'
                  name='ref'
                  className='  w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none  focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                  placeholder='Votre reference dossier'
                />
              </div>
              <div className='text-xs text-left px-3 mb-4' href>
                <p>Saisissez la référence du dossier recherché telle qu'elle figure sur la demande soumise. Exemple : PCT-PANF-MRF-456/2020</p>
              </div>
              <div className='flex justify-center '>
                <Link
                  to='/register'
                  className='flex items-center justify-center h-10  w-11/12 max-w-prose text-sm  px-1 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                >
                  Verifier
                </Link>
              </div>{' '}
              <br />
              <br />
            </section>
          </section>
        </section>
        <section className='md:mx-5 espace pont espace-pont bg-white'>
          <div class='my-6 mx-4'>
            <h2 class='font-bold'>Pont de confiance Usager / Administration</h2>

            <p class='text-xs '>Un parcours d'autorisation 100% digital, 100% traçable avec Zéro papier déposé et Zéro papier délivré.</p>
          </div>
          <div className='flex items-stretch box px-3 mb-10'>
            <div class='w-full'>
              <input
                type='text'
                name='ref'
                className='  w-full h-full px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none  focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                placeholder=' Recherche par activite Exemple:peinture'
              />
            </div>

            <button class='bg-slate-500 py-1 px-1'>
              <svg class=' bg-slate-500w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
              </svg>
            </button>
          </div>

          <div className='flex  mx-6'>
            <section className='main-pont-section qa mr-6 border-2 border-sky-500'>
              <span class='font-bold'>Quelle procédure suivre ?</span>
              <br />
              <i className='fas fa-map-signs fa-2x' />
              <span>
                Répondez à quelques questions pour être <br /> mieux orienté.
              </span>
              <button className='simul'>Demarrer simulation</button>
            </section>
            <section className='second-pont-section'>
              <section className='  border-2 border-sky-500 '>
                <i className='fas fa-map-marker-alt fa-2x ika' />
                <br />
                <div class='align-middle'>Autorisations urbanistiques</div>
              </section>
              <section className='set-pont qa qav2 border-2 border-sky-500'>
                <i className='fas fa-cog fa-2x ika' />
                <br />
                <span>Autorisations economiques</span>
              </section>
            </section>
          </div>
          <div className='coord-flex'>
            <div className='coordonnes'>
              <i className='fas fa-paper-plane' />
              <span> Support@rokhas.ma</span>
            </div>
            <div className='coordonnes'>
              <i className='fas fa-phone' />
              <span> +212 (0) 5 22 23 23 44</span>
            </div>
            <br />
            <button className='rendez-vous'>
              <span>Reserver un rendez-vous</span>
            </button>
            <br />
          </div>
        </section>
      </div>
      <div className='actualites-first'>
        <h2 style={{ textAlign: 'center' }}> Actualites</h2>
        <hr style={{ border: 'solid #38A', width: '22%', textAlign: 'center' }} />
      </div>
      <div className='news-main'>
        <section className='news espace'>
          <img alt='' />
          <h2>أحدث التطورات : R3.1.7.4 الإصدارالجديد </h2>
          <p>.يعد خلق القيمة من خلال الابتكار شاهدا على الحاجة إلى ايجاد حلول تتكيف مع احتياجات مرتفقي منصة "رخص" الفريدة وذلك من خلال الاستماع إليهم وفهمهم وجرد متطلباتهم</p>
          <span />
        </section>
        <section className='news espace'>
          <img alt='' />
          <h2>أحدث التطورات : R3.1.7.4 الإصدارالجديد </h2>
          <p>.يعد خلق القيمة من خلال الابتكار شاهدا على الحاجة إلى ايجاد حلول تتكيف مع احتياجات مرتفقي منصة "رخص" الفريدة وذلك من خلال الاستماع إليهم وفهمهم وجرد متطلباتهم</p>
          <span />
        </section>
        <section className='news espace'>
          <img alt='' />
          <h2>أحدث التطورات : R3.1.7.4 الإصدارالجديد </h2>
          <p>.يعد خلق القيمة من خلال الابتكار شاهدا على الحاجة إلى ايجاد حلول تتكيف مع احتياجات مرتفقي منصة "رخص" الفريدة وذلك من خلال الاستماع إليهم وفهمهم وجرد متطلباتهم</p>
          <span />
        </section>
        <section className='news espace'>
          <img alt='' />
          <h2>أحدث التطورات : R3.1.7.4 الإصدارالجديد </h2>
          <p>.يعد خلق القيمة من خلال الابتكار شاهدا على الحاجة إلى ايجاد حلول تتكيف مع احتياجات مرتفقي منصة "رخص" الفريدة وذلك من خلال الاستماع إليهم وفهمهم وجرد متطلباتهم</p>
          <span />
        </section>
      </div>
      <div className='actualites-first'>
        <h2 style={{ textAlign: 'center' }}> Rokhas en chiffres</h2>
        <hr style={{ border: 'solid #38A', width: '22%', textAlign: 'center' }} />
      </div>
      <div className='md:flex md:justify-between md:mx-20 '>
        <section className=' border-2 border-sky-000 bg-white py-8 '>
          <i className='fas fa-republican fa-4x' />
          <h2>Couverture geographique </h2>
        </section>
        <section className=' border-2 border-sky-000 bg-white py-8'>
          <i className='fas fa-hourglass-end fa-4x' />
          <h2>Classement national </h2>
        </section>
        <section className='border-2 border-sky-000 bg-white py-8'>
          <i className='fas fa-server fa-4x' />
          <h2>Machine learning</h2>
        </section>
        <section className='border-2 border-sky-000 bg-white py-8'>
          <i className='fas fa-database fa-4x' />
          <h2>Open Data </h2>
        </section>
      </div>
    </div>
  )
}
