/*
 * ***********************************************************************
 * Compass UOL CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Compass UOL.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Compass UOL and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Compass UOL
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Compass UOL.
 * ***********************************************************************
 */

package com.uol.cryptobike.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Header} Sling Model used for the {@code cryptobike/components/header} component.
 * 
 */
@ConsumerType
public interface Header
    extends ComponentExporter
{


    String getFirstbuttonlabel();

    String getFirstlinklabel();

    String getFirstbuttonmobile();

    String getFirstlinkmobile();

    String getSecondbuttonlabel();

    String getSecondlinklabel();

    String getSecondbuttonmobile();

    String getSecondlinkmobile();

    String getThirdbuttonlabel();

    String getThirdlinklabel();

    String getThirdbuttonmobile();

    String getThirdlinkmobile();

    String getFourthbuttonlabel();

    String getFourthlinklabel();

    String getFourthbuttonmobile();

    String getFourthlinkmobile();

}
