import React from 'react';

const AccessDetail = () => {
  return (
    <div className='mt-[30px] md:mt-[64px] article-side-wrapper text-neutral-12'>
      <div className='flex md:items-center flex-col'>
        <h1 className='bold-9'>{`Breaking Down Barriers to Treatment for Opioid Use Disorder: Enhancing Access`}</h1>
        <div className='mt-[64px] pb-8 border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Increasing Access to Treatment</h3>
          <p className='mt-2 regular-4'>
            {`Enhancing access to treatment is vital for addressing the opioid crisis effectively. 
            Let's delve into various barriers individuals face when accessing 
            treatment for opioid use disorder (OUD) and explore strategies to overcome them.`}
          </p>
        </div>
        <div className='mt-[32px] pb-8  border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Childcare Responsibilities</h3>
          <p className='mt-2 regular-4'>
            {`Childcare responsibilities often present a significant barrier to accessing treatment for OUD:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Conflicting Schedules:</h5>
              <p className='mt-2 regular-4'>
                {`Treatment appointments may clash with childcare hours, making it challenging for parents to attend.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Single Parenthood:</h5>
              <p className='mt-2 regular-4'>
                {`Single parents may struggle to find suitable childcare while they seek treatment.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Stigma Around Parenthood:</h5>
              <p className='mt-2 regular-4'>
                {`Fear of judgment or intervention by child protective services may deter parents from seeking treatment, prioritizing childcare over their well-being.`}
              </p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`Providing childcare assistance, flexible treatment scheduling options, and supportive resources can help parents access treatment without sacrificing the care of their children.`}</p>
        </div>
        <div className='mt-[32px] pb-8  border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Transportation Challenges</h3>
          <p className='mt-2 regular-4'>
            {`Transportation issues can hinder individuals from reaching treatment centers:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Lack of Reliable Transportation:</h5>
              <p className='mt-2 regular-4'>
                {`Many individuals lack access to a vehicle or reliable public transportation, making it difficult to travel to treatment facilities.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Rural Isolation:</h5>
              <p className='mt-2 regular-4'>
                {`Those in rural areas face longer travel times and limited transportation options.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Financial Barriers:</h5>
              <p className='mt-2 regular-4'>
                {`Even if transportation is available, the cost of gas or public transit fares may be prohibitive.`}
              </p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`Implementing transportation assistance programs, rideshare services, or mobile treatment options can bridge the gap for those unable to access treatment due to transportation challenges.`}</p>
        </div>
        <div className='mt-[32px] pb-8  border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Distance to Treatment Facilities</h3>
          <p className='mt-2 regular-4'>
            {`The distance to treatment facilities can impact access to care:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Urban vs. Rural Disparities:</h5>
              <p className='mt-2 regular-4'>
                {`Urban areas may have more treatment options nearby, while rural areas may require individuals to travel long distances.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Limited Treatment Options:</h5>
              <p className='mt-2 regular-4'>
                {`Some regions may lack treatment facilities, necessitating significant travel for care.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Time and Resource Constraints:</h5>
              <p className='mt-2 regular-4'>
                {`Traveling long distances may require time off work or additional childcare, complicating access.`}
              </p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`Expanding treatment facilities in underserved areas and utilizing telehealth services can improve access for individuals in remote or underserved communities.`}</p>
        </div>
        <div className='mt-[32px]'>
          <h3 className='bold-6'>Thoughts on Enhancing Access</h3>

          <div className='mt-2'>
            <p className='regular-4'>
              {`In addition to the highlighted barriers, it's essential to consider other factors impacting access, such as financial constraints, language barriers, and stigma within healthcare settings. Collaborative efforts among stakeholders, including healthcare providers, policymakers, community organizations, and individuals with lived experience, are essential for implementing effective solutions.`}
            </p>
            <p className='mt-5 regular-4'>
              {`Increasing access to treatment requires a multifaceted approach, including policy changes, resource allocation, and community engagement. By addressing access barriers comprehensively, we can ensure that all individuals have the opportunity to receive the care and support they need to overcome opioid use disorder.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessDetail;
