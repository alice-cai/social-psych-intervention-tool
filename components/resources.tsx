import React from 'react'
import styles from '@styles/content.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Image from 'next/image';

function Resources() {
  return (
    <div>

      <header>Worksheets</header>
      <div className={styles.resourceCardRow}>
        <Card sx={{ maxWidth: 200 }}>
          <Image alt="horn" src="/horn.png" width={200} height={200} />
          <CardContent>
              Toot Your Own Horn 
          </CardContent>
          <CardActions>
            <div className={styles.resourceCardAction}>
                <Button size="large" target="_blank" href="http://www.self-esteem-experts.com/support-files/tootyourhornworksheet.pdf ">Visit</Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <Image alt="strength" src="/strength.jpeg" width={200} height={200} />
          <CardContent>
              Strengths and Qualities 
          </CardContent>
          <CardActions>
            <div className={styles.resourceCardAction}>
                <Button size="large" target="_blank" href="https://www.therapistaid.com/worksheets/my-strengths-and-qualities ">Visit</Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <Image alt="self-esteem" src="/self-esteem.jpeg" width={200} height={200} />
          <CardContent>
              Self-Esteem Journal 
          </CardContent>
          <CardActions>
            <div className={styles.resourceCardAction}>
                <Button size="large" target="_blank" href="https://www.therapistaid.com/worksheets/self-esteem-journal">Visit</Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <Image alt="negative thoughts" src="/negative-thoughts.jpeg" width={200} height={200} />
          <CardContent>
              Challenging Negative Thoughts
          </CardContent>
          <CardActions>
            <div className={styles.resourceCardAction}>
                <Button size="large" target="_blank" href="https://www.therapistaid.com/worksheets/challenging-negative-thoughts">Visit</Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <Image alt="self-discovery" src="/self-discovery.jpeg" width={200} height={200} />
          <CardContent>
             Self-Exploration Excercise
          </CardContent>
          <CardActions>
            <div className={styles.resourceCardAction}>
                <Button size="large" target="_blank" href="https://www.therapistaid.com/worksheets/self-exploration-sentence-completion">Visit</Button>
            </div>
          </CardActions>
        </Card>
      </div>

      <br/>
      <br/>
      <header>Safe Social Media use, and what that looks like</header>
      <div className={styles.resourceCardRow}>
        <div>
          <Card sx={{ maxWidth: 600 }}>
            <div className={styles.cardVariant}>
            <Image alt="kids health org" src="/kids-health.png" width={300} height={150} />
            <div>
            <CardContent>
              To help them kids find the balance and talk about how to use social media wisely.
            </CardContent>
            <CardActions>
              <div className={styles.resourceCardAction}>
                  <Button size="large" target="_blank" href="https://kidshealth.org/en/parents/social-media-smarts.html">Visit</Button>
              </div>
            </CardActions>
            </div>
            </div>
          </Card>

          <Card sx={{ maxWidth: 600 }}>
            <div className={styles.cardVariant}>
            <Image alt="norton" src="/norton.png" width={300} height={150} />
            <div>
            <CardContent>
            15 social networking safety tips to make the best use of social networking while avoiding the risks.
            </CardContent>
            <CardActions>
              <div className={styles.resourceCardAction}>
                  <Button size="large" target="_blank" href="https://www.nortonlifelockpartner.com/security-center/15-social-networking-safety-tips.html">Visit</Button>
              </div>
            </CardActions>
            </div>
            </div>
          </Card>

          <Card sx={{ maxWidth: 600 }}>
            <div className={styles.cardVariant}>
            <Image alt="government of canada" src="/canada.jpeg" width={300} height={150} />
            <div>
            <CardContent>
            Knowing how to use social media  safely is an important part of protecting your identity online.
            </CardContent>
            <CardActions>
              <div className={styles.resourceCardAction}>
                  <Button size="large" target="_blank" href="https://www.getcybersafe.gc.ca/en/secure-your-accounts/social-media">Visit</Button>
              </div>
            </CardActions>
            </div>
            </div>
          </Card>
        </div>
        <Image alt="feel good accounts" src="/feel-good-accounts.jpeg" width={370} height={420} />
      </div>
      
      <br/>
      <br/>
      <header>Mental Health Resources</header>

      <div className={styles.resourceCardRow}>
      <Card sx={{ maxWidth: 350 }}>
          <Image alt="kids help phone" src="/kids-help-phone.png" width={350} height={300} />
          <CardContent>
            <p>
            Get support right now by texting CONNECT to 686868.
            </p>
            <p>
            Chat online: Chat with a professional counsellor online from 7 p.m. to midnight ET.
            </p>
            <p>
            By phone: Get support in multiple languages over the phone 24/7 by calling 1-800-668-6868.
            </p>
            Website has tips and info about mental health, jobs, money, safety, school, self-care, bullying, body image, dating & consent, growing & healing, family, etc.
            <p>
            Also features quizzes, games and activities (practicing mindfulness, making a safety plan, self-assessment).
            </p>
          </CardContent>
          <CardActions>
            <div className={styles.resourceCardAction}>
                <Button size="large" target="_blank" href="https://kidshelpphone.ca/">Visit</Button>
            </div>
          </CardActions>
        </Card>
      <Card sx={{ maxWidth: 350 }}>
          <Image alt="bell lets talk" src="/bell-lets-talk.jpeg" width={350} height={300} />
          <CardContent>
          <p>
          Building on ten years of increased awareness and acceptance around mental health, Bell Let&apos;s Talk is focused on engaging Canadians to take action to create positive change in mental health.
          </p>
          <p>
            Dedicated to moving mental health forward in Canada, Bell Let&apos;s Talk promotes awareness and action with a strategy built on 4 key pillars: Fighting the stigma, improving access to care, supporting world-class research and leading by example in workplace mental health.
          </p>
          <p>
            Website has ways to help (recognizing signs of stress, taking care of yourself, taking care of others, and connect to help). 
          </p>
          </CardContent>
          <CardActions>
            <div className={styles.resourceCardAction}>
                <Button size="large" target="_blank" href="https://letstalk.bell.ca/en/ ">Visit</Button>
            </div>
          </CardActions>
        </Card>

      <Card sx={{ maxWidth: 350 }}>
          <Image alt="wellness together canada" src="/wellnes-together-canada.png" width={350} height={300} />
          <CardContent>
            <p>
            Wellness Together Canada provides free resources for mental health and substance use support. Tell us a little bit about yourself and we&apos;ll find the ones best suited to you. Your answers will remain private and confidential. 
            </p>
            <p>
              Webiste also offers:
            </p>
            <p>
            Learning tools: Browse videos, articles, videos, etc.
            </p>
            <p>
            Discover programs, apps, and courses to improve skills.
            </p>
            <p>
            Peer support.
            </p>
            <p>
            Wellness assessments.
            </p>
            <p>
            Phone counseling 24/7
            </p>
          </CardContent>
          <CardActions>
            <div className={styles.resourceCardAction}>
                <Button size="large" target="_blank" href="https://www.wellnesstogether.ca/en-CA ">Visit</Button>
            </div>
          </CardActions>
        </Card>
        </div>

        <br/>
        <br/>
        <header>
        Tips n’ Tricks on how to responsibly use social media
        </header>
        <p>
        There are simple and easy to follow instructions/guide that are informative when users are on social media. This will help them be more conscious and mindful in the digital world.
        </p>
        <ul>
          <li>
          <b>Use your screen time wisely:</b> Keep track of how much time you&apos;ve spent on social media by using it more productively. Set limits on how much you time you spend on your devices as apps should not be a roadblock to completing your daily tasks. This is to stop mindless scrolling by utilizing your time more beneficial.
          </li>
          <li>
          <b>Control the content you see:</b> Avoid following accounts that are negative (i.e. bullying, aggressive, and/or insulting) or reading misinformation that spreads false news online. Some sources are unreliable and harmful to our mental health.
          </li>
          <li>
          <b>Be cautious of Clickbaits:</b> Clickbaits are links that use tactics to urge us to click them. DON&apos;T. They are usually unsatisfactory, scripted, monetizing schemes that waste time. They are also associated with viruses so if something looks too good to be true, it is.
          </li>
          <li>
          <b>Don’t post everything online:</b> It may seem like this is the point of social media, but in reality it is not wise to make everything public. Strangers will exploit this information to take advantage od you. Keep your identity and address hidden and be mindful of what you post and who you speak to online.
          </li>
          <li>
          <b>Disable the like-counter:</b> This allows you to post without worrying over numbers. Sometimes we forget that numbers don&apos;t actually represent who we are. We have a tendency to post things we think others would like rather than what we actually want to post and due to worry others will judge us for it. So go ahead, post an album from your favorite musician and don&apos;t worry about who else likes them!
          </li>
        </ul>

        <br/>
        <br/>
        <header>
          How Can Parents Help Teach Their Kids Healthy Social Media Habits?
        </header>
        <ul>
          <li>
          <b>Be nice.</b> Mean behavior is not OK. Make it clear that you expect your kids to treat others with respect, and to never post hurtful or embarrassing messages. And ask them to always tell you about any harassing or bullying messages that others post.
          </li>
          <li>
          <b>Think twice before hitting send.</b> Remind kids that what they post can be used against them. For example, letting the world know that you&apos;re off on vacation or posting your home address gives would-be robbers a chance to strike. Kids also should avoid posting specific locations of parties or events, as well as phone numbers.
          </li>
          <li>
          <b>Follow the WWGS? (What Would Grandma Say?) rule.</b> Teach kids not to share anything on social media that they wouldn&apos;t want their teachers, college admissions officers, future bosses — and yes, grandma — to see.
          </li>
          <li>
          <b>Use privacy settings.</b> If you don&apos;t know them, don&apos;t friend them. This is a plain, simple — and safe — rule of thumb. Let them know that kids who follow friends are generally happier than those who follow strangers
          </li>
          <li>
          <b>Make a social media contract.</b> they agree to protect their own privacy, consider their reputation, and not give out personal information. They also promise not to use technology to hurt anyone else through bullying or gossip
          </li>
        </ul>
        <br/>
        <br />
        <header>
          <Link target="_blank" href="https://www.betterhelp.com/advice/general/the-importance-of-a-strong-sense-of-self-and-how-to-gain-it/">The Importance Of A Strong Sense Of Self And How To Gain It </Link>
        </header>
        <ul>
          <li>
            Believing in yourself
          </li>
          <li>
            Know when to say <b>no</b>
          </li>
          <li>
          Develop hobbies and interests you genuinely like, even if your friends aren&apos;t into the same things
          </li>
          <li>
          Taking time for yourself
          </li>
        </ul>
        <p>How can you cultivate self-awareness and self-confidence?</p>
        <ul>
          <li>
            Take Internal Inventory Of Your Values, Beliefs, And Desires
          </li>
          <li>
            Turn Your Purpose Into Action
          </li>
          <li>
          Repeat Positive Affirmations
          </li>
          <li>
          Seek professional help (therapy) if you need the extra guidance
          </li>
        </ul>

    </div>
  )
}

export default Resources;