import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecoveryPlatform = () => {
  return (
    <div className='article-side-wrapper mt-[54px] mb-[64px]'>
      <Image
        src='/press/breaking-barriers.png'
        alt='breaking barriers logo'
        width={295}
        height={67}
        priority={true}
      />
      <div className='mt-6 text-neutral-12'>
        <span className='semibold-4 uppercase text-accent-9'>
          For immediate release
        </span>
        <h1 className='bold-9 mt-2'>
          The Recovery Platform, Triad Behavioral Resources, and North Carolina
          Medical Society Foundation Launch Coalition to Break Barriers to
          Substance Use Recovery
        </h1>
      </div>
      <div className='mt-[56px] regular-4'>
        <p>
          {`Wilmington, NC – May 30th, 2024  – The Recovery Platform (TRP), a Substance Use Disorder (SUD) specific platform that facilitates and guides patient  compliance and engagement in Medication Assisted Treatment (MAT), and Triad Behavioral Resources, PC (TBR), a counseling and opioid use disorder treatment-focused medical practice, have partnered with the North Carolina Medical Society Foundation to establish the coalition Breaking Barriers to Substance Use Recovery (Breaking Barriers).
`}
        </p>
        <p className='mt-6'>
          {`The mission of Breaking Barriers is to address and dismantle the numerous obstacles that prevent individuals from accessing adequate treatment for substance use disorders. The coalition aims to bring forth education and awareness, targeting the pervasive barriers such as treatment availability, work/stigma issues, transportation problems, , judicial impediments, and more. By tackling these challenges head-on, Breaking Barriers strives to ensure that those seeking help can do so without encountering additional hindrances.`}
        </p>
        <p className='mt-6'>
          {`The current landscape of substance use recovery is fraught with barriers that have exacerbated the epidemic over recent years, with predictions indicating further growth if these issues remain unaddressed. Breaking Barriers's efforts are crucial in reversing this trend, providing a clearer path to treatment for individuals and veterans seeking recovery.
“We are committed to breaking down the barriers that impede access to essential treatment,” says Reynold Yordy, CTO of The Recovery Platform. “Through this coalition, we are fostering a supportive environment where individuals can seek the help they need without additional burdens.”
`}
        </p>
        <p className='mt-6'>
          {`The coalition has already garnered interest from multiple organizations eager to join the cause, recognizing that eliminating these barriers is vital to combating the epidemic that has impacted so many lives.`}
        </p>
        <p className='mt-6'>
          {`For more information about Breaking Barriers to Substance Use Recovery and to learn how you can get involved, please visit nomorebarriers.org.`}
        </p>
      </div>

      <div className='mt-[64px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[129px]'>
        <div>
          <span className='semibold-4'>Membership Contact</span>
          <div className='mt-2 flex flex-col regular-4'>
            <span>Pete Gratale</span>
            <span>Coaltiion Development</span>
            <Link href='mailto:pgratale@nomorebarriers.org'>
              pgratale@nomorebarriers.org
            </Link>
            <Link href='tel:(910) 409 - 3339'>(910) 409 - 3339</Link>
          </div>
        </div>

        <div>
          <span className='semibold-4'>Media Contact</span>
          <div className='mt-2 flex flex-col regular-4'>
            <span>Zach Herrmann</span>
            <span>Director of Marketing</span>
            <Link href='mailto:zherrmann@nomorebarriers.org'>
              zherrmann@nomorebarriers.org
            </Link>
            <Link href='tel:(910) 200 - 8447'>(910) 200 - 8447</Link>
          </div>
        </div>
      </div>

      <div className='mt-[64px]'>
        <h4 className='bold-6'>About The Recovery Platform</h4>
        <p className='mt-4'>
          {`The Recovery Platform (TRP) is a SUD specific platform that facilitates and guides physician compliance and patient engagement when practicing Medication Assisted Treatment (MAT). The platform allows providers to identify patients with mental health illnesses including substance use disorders. By leveraging its concierge-like patient functionality it expands access and privacy for treatment to more patients. TRP’s technology automates the monitoring and ingestion of patient data which is analyzed and reported to support more complete and timely clinical decisions. TRP features patient self-scheduling to increase patient engagement while embedded telemedicine functionality increases access and privacy, improving appointment attendance and retention.  `}
        </p>
      </div>
      <div className='mt-[64px]'>
        <h4 className='bold-6'>About Triad Behavioral Resources</h4>
        <p className='mt-4'>
          {`As the first NC VBOT practice of virtual Medication Assisted Treatment (MAT) in North Carolina, Triad excels in delivering comprehensive care. With over two decades of experience in aiding individuals with Substance Use Disorders, Triad is dedicated to offering a SAMHSA-compliant Virtual MAT program. Their diverse remote clinical team, comprising medication prescribers, counselors, peer specialists, case managers, and psychiatrists, prioritizes tailoring each patient's care plan to align with their individual goals, including the gradual tapering off of MAT prescriptions when appropriate. Triad's remote clinicians leverage all the data and treatment tools offered by their strategic partners to thoroughly understand their patients' risk for relapse and manage common co-occurring conditions.`}
        </p>
      </div>
      <div className='mt-[64px]'>
        <h4 className='bold-6'>
          About North Carolina Medical Society Foundation
        </h4>
        <p className='mt-4'>
          {`The North Carolina Medical Society Foundation (NCMSF) is the philanthropic arm of the North Carolina Medical Society. The mission of the North Carolina Medical Society Foundation is to improve access to quality health care for all North Carolinians. Our portfolio of programs demonstrates our commitment to this vision. In addition to Project VBOT, the Foundation has created programs including Our Community Health Initiative, a technology enabled service that supports Primary Care Providers wishing to offer their patients services such as Diabetes Prevention, Chronic Care Management, and Behavioral Health Integration.`}
        </p>
      </div>
    </div>
  );
};

export default RecoveryPlatform;
