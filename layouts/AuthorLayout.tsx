import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import 'animate.css'

interface Props {
  children: ReactNode
  frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="items-start space-y-2 prose dark:prose-dark max-w-none pt-16">
        <section>
          <h2 className="animate__animated animate__fadeInUp titles">
            Hi!{' '}
            <span role="img" aria-label="waving-hand emoji">
              👋
            </span>
          </h2>
          <p className="animate__animated animate__fadeInUp">
            I study the interaction between humans and computers.
          </p>
          <p className="animate__animated animate__fadeInUp">
            I play guitar,{' '}
            <span role="img" aria-label="guitar-emoji">
              🎸
            </span>{' '}
            throw hoops{' '}
            <span role="img" aria-label="basketball-emoji">
              🏀
            </span>{' '}
            and am proudly creative.
          </p>
        </section>
        <section>
          <h2 className="titles animate__animated animate__fadeInUp">
            I've done a lot of technical work.
          </h2>
          <p className="animate__animated animate__fadeInUp">
            This is what I've been doing lately.
          </p>
          <br />
          UNDER CONSTRUCTION
        </section>
      </div>
      {/*         <canvas baseChart
          chartType="radar"
          datasets="chartData"
          options="chartOptions"
          labels="chartLabels">
        </canvas>
 */}
    </>
  )
}
